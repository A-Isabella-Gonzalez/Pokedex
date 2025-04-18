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
  const [answer, setAnswer] = useState("");

  const handleNextQuestionClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const result = await fetchPokemonTrivia();
    setTriviaObj(result);
    setAnswer("");
  };

  const handleRevealAnswerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAnswer(triviaObj?.answer);
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
          <div className="w-50 flex place-content-center h-[39px]">
            <button
              className="w-38 h-25 rounded-full bg-[#365FAC] font-abeezee text-[23px] text-[#FFCC01] hover:bg-[#90a9da] hover:text-[#474747] hover:cursor-pointer"
              onClick={handleNextQuestionClick}
            >
              Next Question
            </button>
          </div>
          <div>
            <div className="h-85 mt-4 w-200 bg-[#ffffff] rounded-2xl relative">
              <p className="font-abeezee  pt-7 pl-5 pr-5 text-[30px] text-center">
                {triviaObj?.question}
              </p>
              {triviaObj?.options && (
                <ol className="list-inside list-disc font-abeezee text-3xl absolute top-37 left-15">
                  {triviaObj?.options?.map((option, index) => {
                    return <li key={index}>{option}</li>;
                  })}
                </ol>
              )}
            </div>
          </div>
          <div className="w-50 flex place-content-center h-[39px]">
            <button
              className="w-38 h-25 rounded-full bg-[#365FAC] font-abeezee text-[#FFCC01] text-[23px] hover:bg-[#90a9da] hover:text-[#474747] hover:cursor-pointer"
              onClick={handleRevealAnswerClick}
            >
              Answer
            </button>
          </div>
        </div>
        <div className="h-15 mt-5 w-200 bg-[#ffffff] rounded-2xl">
          <p className="font-abeezee mt-[12px] ml-4 text-[25px]">{`The answer is: ${answer}`}</p>
        </div>
      </section>
    </div>
  );
}

export default Trivia;
