import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const userMessage = req.body.userMessage || '';
  if (userMessage.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter message to get the response from Chatbot. Message cannot be empty.",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: getPrompt(userMessage),
      temperature: 0.1,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error: any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

const getPrompt = (message: string) => {
  return `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".

  Q: What is human life expectancy in the United States?
  A: Human life expectancy in the United States is 78 years.
  
  Q: Who was president of the United States in 1955?
  A: Dwight D. Eisenhower was president of the United States in 1955.
  
  Q: Which party did he belong to?
  A: He belonged to the Republican Party.
  
  Q: What is the square root of banana?
  A: Unknown
  
  Q: How does a telescope work?
  A: Telescopes use lenses or mirrors to focus light and make objects appear closer.
  
  Q: Where were the 1992 Olympics held?
  A: The 1992 Olympics were held in Barcelona, Spain.
  
  Q: How many squigs are in a bonk?
  A: Unknown
  
  Q: ${message}
  A:`
} 
