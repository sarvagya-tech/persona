
import Groq from "groq-sdk";
import "../config/env.js";
import { getPersona } from "./persona.js";

function getGroqClient() {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("GROQ_API_KEY is missing. Add it to backend/.env");
  }

  return new Groq({
    apiKey,
  });
}

async function chatWithPersona(personaName, message) {
  const persona = getPersona(personaName);
  const groq = getGroqClient();

  if (!persona) {
    throw new Error("Invalid persona");
  }

  if (!message || !message.trim()) {
    throw new Error("Message is required");
  }

  const trimmedMessage = message.trim();

  const finalMessages = [
    {
      role: "system",
      content: persona.system_prompt,
    },
    {
      role: "user",
      content: trimmedMessage,
    },
  ];

  const result = await groq.chat.completions.create({
    messages: finalMessages,
    model:  "openai/gpt-oss-20b",
    temperature: 0.7,
  });

  return result.choices[0]?.message?.content ?? "";
}

export default chatWithPersona;
