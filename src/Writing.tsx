import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import { FaClock } from "react-icons/fa";
import clsx from "clsx";
const OPENAI_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const Writing = () => {
  const currentTopic =
    "Some people think that learning English online is more effective than learning in a classroom. Do you agree or disagree? Give reasons for your answer";
  const [wrotenText, setWrotenText] = useState("");
  const [evoluationResult, setEvoluationResult] = useState("");

  const { register, handleSubmit } = useForm<{ text: string }>();

  const evoluateWriting = async () => {
    const prompt = `You are an experienced English writing examiner.

Evaluate the student's writing using the following structure:

✅ Task Achievement: X/9  
(Does the student answer the prompt fully and appropriately?)

✅ Coherence and Cohesion: X/9  
(Is the writing well-organized and easy to follow?)

✅ Grammar Range and Accuracy: X/9  
(Are tenses, structures, and punctuation used correctly?)

✅ Vocabulary: X/9  
(Is the vocabulary appropriate, varied, and precise?)

📌 Overall Band Score (estimated): X/9

🛠 Grammar Issues and Corrections:  
- Point out grammar mistakes and suggest corrections.

🗣 Awkward or Unnatural Phrasing:  
- Identify phrases that don’t sound natural and suggest improvements.

💬 Topic:  
"${currentTopic}"

📝 Student's Response:  
"${wrotenText}"
`;

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
      console.log("My error", error);
    }
  };

  useEffect(() => {
    if (wrotenText.trim() !== "") {
      evoluateWriting();
    }
  }, [wrotenText]);

  return (
    <div className="flex flex-col ">
      <Header />
      <div className="md:px-20 px-5 md:py-5 grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="shadow-md p-6 rounded-lg lg:col-span-2 col-span-1">
          <div className="flex justify-between items-center">
            <p className="w-full text-3xl font-semibold mb-5">Writing Task</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaClock className="text-xl" />
              <span className="w-[140px]">30 minutes remaining</span>
            </div>
          </div>
          <div className="border border-gray-200 bg-gray-50 p-5 rounded-lg mb-6">
            <h3 className="font-medium text-gary-700 mb-2">Topic:</h3>
            <p className="text-gray-700">
              Some people think that learning English online is more effective
              than learning in a classroom. Do you agree or disagree? Give
              reasons for your answer.
            </p>
          </div>
          <form
            onSubmit={handleSubmit((data) => {
              if (evoluationResult.trim() !== "") {
                setEvoluationResult("");
              }
              setWrotenText(data.text);
            })}
          >
            <textarea
              {...register("text")}
              className="flex w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[300px] text-gray-800 resize-none border-gray-300 focus:border-blue-500 mb-4"
              placeholder="Start writing your assay here..."
            ></textarea>
            <div className="flex items-center justify-between">
              <div className="text-gray-500 text-sm">
                0 words | 0 characters
              </div>
              <button
                type="submit"
                className="border px-6 py-1.5 rounded-md bg-blue-600 text-white md:w-fit w-full"
              >
                Submit Essay
              </button>
            </div>
          </form>
          <p
            className={clsx(
              "text-center overflow-auto",
              evoluationResult ? "h-[300px]" : ""
            )}
          >
            {wrotenText.trim() ? (
              evoluationResult ? (
                evoluationResult
              ) : (
                "please wait"
              )
            ) : (
              <span className="text-2xl font-semibold">enter your essay</span>
            )}
          </p>
        </div>
        <div>
          <div>
            <h3>Writing Tips</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writing;
