import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./utils/store";
import { useNavigate } from "react-router-dom";

const OPENAI_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const Result = () => {
  const [evoluationResult, setEvoluationResult] = useState("");
  const spokenText = useSelector((state: RootState) => state.spokenText);
  const currentQuestion = useSelector(
    (state: RootState) => state.orginalQuestion
  );
  const navigate = useNavigate();

  const EvaluateEnglish = async () => {
    const prompt = `You are an IELTS speaking examiner assistant.

 Evaluate the response as follows:

✅ Relevant / ❌ Not Relevant
Explanation: (Does the answer fully and directly respond to the question?)

Fluency and Coherence: X/9
Grammar: X/9
Vocabulary: X/9
Overall Speaking Band (estimated): X/9

Grammar Mistakes & Corrections:
(List any grammar issues and provide corrections)

Unnatural or Awkward Phrasing:
(Point out anything that doesn’t sound natural and suggest better phrasing)

Original Question: "${currentQuestion}"
User's Answer: "${spokenText}"`;

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
            Referer: "https://personal-teacher-wheat.vercel.app/", // kerakli
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
      if (spokenText.split(" ").length > 10) {
        EvaluateEnglish();
      } else {
        setEvoluationResult(
          "You didn't say sentences. Required 10 words at leaset"
        );
      }
    }
  }, []);

  return (
    <div>
      <p className="h-[600px]  p-2">
        {evoluationResult ? evoluationResult : "please wait"}
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => {
            navigate("/speaking");
          }}
          className="px-6 py-1.5 rounded-md bg-blue-600 text-white"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default Result;
