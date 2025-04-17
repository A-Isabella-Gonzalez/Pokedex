import triviaPic from "../assets/trivia.png";
import { GoogleGenAI } from "@google/genai";
import { useEffect, useState } from "react";

interface Trivia {
  answer: string;
  options: string[];
  question: string;
}

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBfNG_bRoBUM_zbtas4csux4SlNMlXZvOs",
});

async function fetchPokemonTrivia() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Generate a pokemon trivia question with four multiple choice options and an answer and return ONLY valid JSON in this format:
{
"question": "string",
"options": ["string", "string", "string", "string"],
"answer": "string"
}
Do not include markdown formatting or explanations.`,
    });

    const rawText = response.text;

    // Clean up just in case it still returns markdown formatting
    const cleanedText = rawText?.replace(/```json|```/g, "").trim();

    const triviaObj = JSON.parse(cleanedText || "");

    return triviaObj;
  } catch (err) {
    console.error(err);
  }
}

function Trivia() {
  const [triviaObj, setTriviaObj] = useState<Trivia>({} as Trivia);
  const handleArrowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Hello Salem");
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchPokemonTrivia(); // Wait for the async function to resolve
      setTriviaObj(result); // Set the state with the resolved data
    };

    fetchData(); // Call the async function
  }, []); // Only run once when component mounts

  return (
    <div className="h-screen w-screen bg-[#fff9a9]">
      <img className="m-auto w-[350px] pt-14" src={triviaPic} />
      <section className="flex flex-col items-center">
        <div className="flex items-center">
          <div className="w-36 flex place-content-center h-[39px]">
            <button
              className="w-18 h-18 rounded-full bg-[#365FAC]"
              onClick={handleArrowClick}
            >
              Next Question
            </button>
          </div>
          <div>
            <div className="h-85 mt-4 w-200 bg-[#ffffff] rounded-2xl ">
              <p>{triviaObj?.question}</p>
              {triviaObj?.options && (
                <ol className="list-inside list-disc">
                  {triviaObj?.options?.map((option, index) => {
                    return <li key={index}>{option}</li>;
                  })}
                </ol>
              )}
            </div>
          </div>
          <div className="w-36 flex place-content-center h-[39px]">
            <button
              className="w-18 h-18 rounded-full bg-[#365FAC]"
              onClick={handleArrowClick}
            >
              Answer
            </button>
          </div>
        </div>
        <div className="h-15 mt-5 w-200 bg-[#ffffff] rounded-2xl">
          <p>{triviaObj?.answer}</p>
        </div>
      </section>
    </div>
  );
}

export default Trivia;
