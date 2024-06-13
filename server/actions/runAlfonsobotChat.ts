'use server';

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
  InputContent,
} from '@google/generative-ai';

const MODEL_NAME = 'gemini-1.5-flash';
const API_KEY = process.env.AI_APY_KEY || '';

export default async function runAlfonsobotChat(
  userInput: string,
  history: InputContent[] | undefined
) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history,
  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  const text = response.text();

  console.log(text);
  return text;
}
