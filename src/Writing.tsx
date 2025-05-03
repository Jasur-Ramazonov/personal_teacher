import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
    <div className="p-2 flex flex-col gap-5">
      <p className="text-center w-full text-3xl font-semibold mb-5">Writing</p>
      <p className="w-full text-center text-xl font-semibold">
        Topic: Some people think that learning English online is more effective
        than learning in a classroom. Do you agree or disagree? Give reasons for
        your answer
      </p>
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
          className="resize-none h-[200px] w-full p-2 rounded-md border"
          placeholder="Write here..."
        ></textarea>
        <div className="flex justify-end">
          <button
            type="submit"
            className="border px-6 py-1.5 rounded-md bg-blue-600 text-white md:w-fit w-full"
          >
            Submit
          </button>
        </div>
      </form>
      <p className="text-center h-[300px] overflow-auto ">
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
  );
};

export default Writing;
