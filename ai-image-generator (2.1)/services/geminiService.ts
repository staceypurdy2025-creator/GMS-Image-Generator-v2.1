import { GoogleGenAI } from "@google/genai";

export async function generateImagesFromPrompt(prompt: string): Promise<string[]> {
  if (!process.env.API_KEY) {
    throw new Error("API key is missing. Please ensure it's configured correctly.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: 4,
        outputMimeType: 'image/png',
        aspectRatio: '9:16',
      },
    });

    if (!response.generatedImages || response.generatedImages.length === 0) {
        throw new Error("No images were generated. The prompt may have been blocked.");
    }

    const imageUrls = response.generatedImages.map(img => {
        const base64ImageBytes: string = img.image.imageBytes;
        return `data:image/png;base64,${base64ImageBytes}`;
    });

    return imageUrls;

  } catch (error) {
    console.error("Error generating images via Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate images: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating the images.");
  }
}
