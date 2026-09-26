import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json({ limit: '25mb' }));

// Initialize GoogleGenAI server-side with User-Agent header as required
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// Product extraction endpoint
app.post('/api/extract-product', async (req: Request, res: Response) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg' } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'imageBase64 is required' });
    }

    if (!ai) {
      // Fallback if GEMINI_API_KEY is not configured yet
      return res.json({
        success: true,
        source: 'heuristic_fallback',
        product: {
          title: 'Opex Premium Product',
          category: 'Bulbs',
          wattage: '9W / 12W / 15W',
          guarantee: '1 Year Guarantee',
          description: 'Factory-tested energy-efficient electrical product from M/S Osman Trading.',
          features: ['Pure copper wire', 'High lumen efficiency', 'Overload protected'],
        },
      });
    }

    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: mimeType,
            },
          },
          {
            text: `Analyze this image from an electrical, lighting, or door factory catalogue (M/S Osman Trading / Opex brand). 
Extract the primary product or items featured in this image.
Identify:
1. Product Title (e.g. "Ween Bulb", "IPS Emergency Bulb", "Bullet Bulb", "Slim LED Batten Tube Light", "Solar Rechargeable Fan", "Multiplug Extension", "Power Cable", "Carved Luxury Door").
2. Category: MUST be strictly one of: "Bulbs", "Tube Lights", "Fans", "Accessories", "Cables", "Doors".
3. Specs or Wattages found on the image (e.g. "5W, 9W, 15W, 18W, 30W", "10W, 20W, 40W, 60W", "16 inch AC/DC", "4-Gang 220V", "1.5mm - 6.0mm").
4. Guarantee / Warranty text if present (e.g. "1 Years Guarantee", "Guarantee", "Warranty", or "Factory Guarantee").
5. A concise 1-2 sentence professional description of the product.
6. 3-4 bullet point specifications or key features visible or typical for this item.

Respond in exact JSON format matching the schema.`,
          },
        ],
      },
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: 'Product name or title' },
            category: {
              type: Type.STRING,
              description: 'Category: Bulbs, Tube Lights, Fans, Accessories, Cables, or Doors',
            },
            wattage: { type: Type.STRING, description: 'Wattage options or technical size/specifications' },
            guarantee: { type: Type.STRING, description: 'Guarantee or Warranty period (e.g. 1 Years Guarantee)' },
            description: { type: Type.STRING, description: 'Brief description' },
            features: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: '3-4 prominent features or specs',
            },
          },
          required: ['title', 'category', 'wattage', 'guarantee', 'description', 'features'],
        },
      },
    });

    const parsed = JSON.parse(response.text?.trim() || '{}');
    return res.json({
      success: true,
      source: 'gemini',
      product: parsed,
    });
  } catch (error: any) {
    console.error('Extraction error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to process image with Gemini AI',
    });
  }
});

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', hasGeminiKey: Boolean(apiKey) });
});

// Serve frontend: In dev mount Vite middlewares; in production serve dist
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer();
