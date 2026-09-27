import { GoogleGenAI, Type } from '@google/genai';

export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { imageBase64, mimeType = 'image/jpeg' } = req.body || {};

    if (!imageBase64) {
      return res.status(400).json({ error: 'imageBase64 is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
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

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: {
        parts: [
          {
            text: `You are an expert product catalog parser for M/S Osman Trading (Opex brand electrical products).
Analyze this catalog cut / product image and extract structured information in JSON format matching the schema.
Extract:
- title: Clean product name (e.g. "01 WEEN BULB" or "12 CABLE")
- category: Category one of: "Bulbs", "Tubes & Deco", "Fans", "Accessories", "Cables & Heavy"
- wattage: Available wattage/specs (e.g. "5W, 9W, 15W, 18W, 30W" or "1.5mm - 6.0mm")
- guarantee: Guarantee/Warranty text if visible (e.g. "1 YEARS GUARANTEE", "WARRANTY", "GUARANTEE")
- description: Concise 1-2 sentence marketing & utility summary
- features: Array of 3-4 key bullet points (e.g. "Energy saving", "Heat sink body", "Voltage protection")`,
          },
          {
            inlineData: {
              data: cleanBase64,
              mimeType,
            },
          },
        ],
      },
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            category: { type: Type.STRING },
            wattage: { type: Type.STRING },
            guarantee: { type: Type.STRING },
            description: { type: Type.STRING },
            features: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: ['title', 'category', 'wattage', 'guarantee', 'description', 'features'],
        },
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({
      success: true,
      source: 'gemini_vision',
      product: parsed,
    });
  } catch (err: any) {
    return res.status(500).json({
      error: 'Extraction failed',
      details: err.message || 'Unknown error',
    });
  }
}
