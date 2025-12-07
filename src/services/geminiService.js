import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBaU2GulgIhFLahnNZx7E-7dYmvKDSe3yk";

const genAI = new GoogleGenerativeAI({ apiKey: API_KEY });
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function generateAIPlan(formData) {
  const prompt = `
Generate a personalized fitness plan based on the following user details:

Name: ${formData.name}
Age: ${formData.age}
Gender: ${formData.gender}
Height: ${formData.heightFeet} ft ${formData.heightInches} in
Weight: ${formData.weight} kg
Goal: ${formData.goal}
Fitness Level: ${formData.level}
Workout Location: ${formData.location}
Diet Preference: ${formData.diet}

Return the result in this JSON format:

{
  "workout": "Daily workout plan here...",
  "diet": "Daily diet plan here...",
  "tips": "Helpful fitness tips...",
  "motivation": "Motivational quote..."
}
  `;

  // Correct structure for generateContent
  const result = await model.generateContent({
    contents: [
      {
        parts: [
          { text: prompt }
        ]
      }
    ]
  });

  const responseText = result.candidates[0].content.parts[0].text;
  console.log("AI response:", responseText);

  return JSON.parse(responseText);
}
