// geminiGrader.js
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "YOUR_API_KEY_HERE";
const model = new GoogleGenerativeAI("").getGenerativeModel({
    model: "gemini-2.5-flash",
});

export async function gradePDFwithGemini(file) {
    const base64 = await fileToBase64(file);

    const prompt = `You are an assignment evaluator.
                    Read the provided PDF and output ONLY a valid JSON object.
                    No explanation. No markdown. No extra text.

             JSON format:
            {
               "topic": <string with the main topic of the assignment>,
               "score": <number between 0 and 10>,
               "feedback": <string with feedback on the assignment in 40 words>,
            }

            Rules:
            - ONLY output JSON
            - MUST be valid JSON
            - No extra characters
            - Do NOT include \`\`\`json or any backticks.
            `;

    const result = await model.generateContent([
        {
            inlineData: {
                data: base64,
                mimeType: "application/pdf",
            },
        },
        prompt,
    ]);

    return result.response.text();
}

function fileToBase64(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () =>
            resolve(reader.result.split(",")[1]); // remove data:pdf;base64,
        reader.readAsDataURL(file);
    });
}
