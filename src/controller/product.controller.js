import { GEMINI_KEY } from "../constants.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

if (!GEMINI_KEY) {
  console.log(`API_KEY not found! Please provide a valid key.`);
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const sendToAi = async (req, res) => {
  try {
    const { history, prompt } = req.body;

    if (!prompt || !history) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Required fields missing."));
    }

    const constraint = `\n\nNOTE: (Don't mention about anything below this in the response)\nRules: Use emojis wherever applicable. If the user asks anything about the history of this chat, use the information below. The below array is the history of the chat so far. If I have not provided a history, ignore it and just generate a response using whatever was asked above this note. Otherwise, keep next response based off of this chat.\n${history}`;

    // const chat = model.startChat({
    //   history: [
    //     {
    //       role: "user",
    //       parts: [
    //         {
    //           text: "Hello, Can you be my friend and assist me with my lifestyle..?",
    //         },
    //       ],
    //     },
    //     {
    //       role: "model",
    //       parts: [
    //         { text: "Great to meet you. What would you like to tell me?" },
    //       ],
    //     },
    //   ],
    // });

    // const result = await chat.sendMessage(prompt);
    const result = await model.generateContent(prompt + constraint);
    const response = await result.response;
    let text = response.text();

    text = text.replace(/\*+/g, "");

    res
      .status(200)
      .send(new ApiResponse(200, text, "Response received successfully."));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Error sending data to AI"));
  }
};
