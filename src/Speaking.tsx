import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import "./App.css";
import myAudio from "./audios/mixkit-select-click-1109.wav";
import myAudio2 from "./audios/mixkit-negative-tone-interface-tap-2569.wav";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSpokenText2 } from "./utils/slice";
import Header from "./Header";
import { useUser } from "@clerk/clerk-react";
import { RootState } from "./utils/store";
enum Questions {
  BEGINNER = "beginnerQuestions",
  ELEMENTARY = "elementaryQuestions",
  PREINTERMEDIATE = "preIntermediateQuestions",
  INTERMEDIATE = "intermediateQuestions",
  UPPERINTERMADIATE = "upperIntermediateQuestions",
}

function Speaking() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [spokenText, setSpokenText] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [userLevel, setUserLevel] = useState<Questions>(Questions.BEGINNER);
  const dispatch = useDispatch();
  const { user } = useUser();
  const questions = useSelector((state: RootState) => {
    if (userLevel) {
      state.upperIntermediateQuestions;
      return state[userLevel];
    }
    return [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    audioRef.current = new Audio(myAudio);
    audioRef2.current = new Audio(myAudio2);
  }, []);

  useEffect(() => {
    const currentQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(currentQuestion);
  }, [userLevel]);

  const handleSpeak = (arg: "start" | "end") => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("your browser doesn't support Speech");
    } else {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event: any) => {
        console.log("You said:", event.results[0][0].transcript);
        setSpokenText(event.results[0][0].transcript);
      };
      if (arg === "end") {
        console.log("salom");
        recognition.stop();
      } else if (arg === "start") {
        recognition.start();
      }

      recognition.onend = () => {
        setIsClicked(false);
        audioRef2.current?.play();
      };

      recognition.onerror = (error: any) => {
        console.error("Speech Error", error);
      };
    }
  };

  useEffect(() => {
    if (spokenText) {
      dispatch(setSpokenText2(spokenText));
    }
  }, [spokenText]);

  return (
    <div className="w-full h-[100vh] relative">
      <Header />
      <h1 className="text-4xl font-bold absolute top-16 text-center w-full flex flex-col gap-2">
        <span>Let's begin Practice</span>
      </h1>
      <div className="absolute top-48 flex flex-col justify-center items-center w-full">
        <select
          onChange={(e) => {
            setUserLevel(e.target.value as Questions);
          }}
          className="border py-2 px-4 rounded-md cursor-pointer"
        >
          <option value="beginnerQuestions">Beginner</option>
          <option value="elementaryQuestions">Elementary</option>
          <option value="preIntermediateQuestions">PreIntermediate</option>
          <option value="intermediateQuestions">Intermediate</option>
          <option value="upperIntermediateQuestions">UpperIntermediate</option>
        </select>
        <p className="text-xl h-[100px] p-2 w-full text-center overflow-auto font-semibold">
          {currentQuestion}
        </p>
      </div>
      <p className="absolute top-72 text-xl h-[310px] p-2 w-full text-center overflow-auto">
        {spokenText ? <span>You said: {spokenText}</span> : "You said nothing"}
      </p>
      <div className="absolute bottom-16 w-full flex justify-center items-center flex-col gap-5">
        <button
          onClick={() => {
            if (!user) return alert("Iltimos ro'yxatdan o'ting");
            audioRef.current?.play();
            setIsClicked(true);
            handleSpeak("start");
          }}
          className={clsx(
            `w-[60px] h-[60px] border flex justify-center items-center rounded-full`,
            isClicked ? "hidden" : ""
          )}
          disabled={isClicked}
        >
          <FaMicrophone className="text-4xl" />
        </button>
        <button
          onClick={() => {
            audioRef2.current?.play();
            setIsClicked(false);
            handleSpeak("end");
          }}
          className={clsx(
            `w-[60px] h-[60px] border flex justify-center items-center rounded-full`,
            isClicked ? "" : "hidden"
          )}
        >
          <FaMicrophoneSlash className="text-4xl" />
        </button>
        <button
          onClick={() => {
            navigate("/result");
          }}
          className={clsx(
            "px-6 py-1.5 bg-blue-600 rounded-md text-white",
            spokenText ? "" : "hidden"
          )}
        >
          See Your result
        </button>
      </div>
    </div>
  );
}

export default Speaking;
