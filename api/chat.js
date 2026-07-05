import Groq from "groq-sdk";
import { getPersona } from "./personas.js";

function getGroqClient() {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("GROQ_API_KEY is missing");
  }

  return new Groq({ apiKey });
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { message, persona } = request.body ?? {};
    const normalizedMessage = typeof message === "string" ? message.trim() : "";
    const normalizedPersona = typeof persona === "string" ? persona.trim() : "hitesh";
    const selectedPersona = getPersona(normalizedPersona);

    if (!normalizedMessage) {
      return response.status(400).json({
        success: false,
        message: "message is required",
      });
    }

    if (normalizedMessage.length > 4000) {
      return response.status(400).json({
        success: false,
        message: "message is too long",
      });
    }

    if (!selectedPersona) {
      return response.status(400).json({
        success: false,
        message: "Invalid persona",
      });
    }

    const groq = getGroqClient();
    const result = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: selectedPersona.system_prompt,
        },
        {
          role: "user",
          content: normalizedMessage,
        },
      ],
      model: process.env.GROQ_MODEL || "openai/gpt-oss-20b",
      temperature: 0.7,
    });

    return response.status(200).json({
      success: true,
      data: result.choices[0]?.message?.content ?? "",
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
}
