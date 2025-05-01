import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./utils/store";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const Result = () => {
  const [evoluationResult, setEvoluationResult] = useState("");
  const spokenText = useSelector((state: RootState) => state.spokenText);

  const EvaluateEnglish = async () => {
    console.log(OPENAI_API_KEY);

    const prompt = `You are an English language speaking examiner.
    
    Evaluate the following sentence as if spoken by a non-native English learner.
    
    Give a fluency score from 0 to 9, based on grammar, vocabulary, and naturalness.
    
    Return the result like this:
    Score: X
    Explanation: <your feedback>
    
    Sentence: "${spokenText}"`;

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "openai/gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://personal-teacher-4i6i.vercel.app", // kerakli
            "X-Title": "My GPT App",
          },
        }
      );
      const result = response.data.choices[0].message.content;
      setEvoluationResult(result);
    } catch (error) {
      console.log("My Error", error);
    }
  };

  useEffect(() => {
    if (spokenText.trim() !== "") {
      EvaluateEnglish();
    }
  }, []);

  return <div>{evoluationResult ?? "please wait"}</div>;
};

export default Result;
