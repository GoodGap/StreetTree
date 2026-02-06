
import { GoogleGenAI } from "@google/genai";
import { PAPER_INFO } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async chatWithPaper(userQuery: string, history: { role: 'user' | 'model', content: string }[]) {
    try {
      const systemInstruction = `
        You are an expert academic assistant for a paper titled "${PAPER_INFO.title}".
        Conference: ${PAPER_INFO.conference}
        TL;DR: ${PAPER_INFO.tldr}
        Abstract: ${PAPER_INFO.abstract}
        
        Answer questions about this paper based on the information provided above. 
        If a question is outside the scope of this paper, politely inform the user.
        Be concise, professional, and clear.
      `;

      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(h => ({ 
            role: h.role === 'user' ? 'user' : 'model', 
            parts: [{ text: h.content }] 
          })),
          { role: 'user', parts: [{ text: userQuery }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "An error occurred while communicating with the AI. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
