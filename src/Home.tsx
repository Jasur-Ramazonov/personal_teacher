import Header from "./Header";
import { useUser } from "@clerk/clerk-react";
import { HiAcademicCap } from "react-icons/hi";
import { FaChartLine } from "react-icons/fa";
import { useState } from "react";
import clsx from "clsx";
import Skills from "./Skills";
enum Options {
  SKILLS = "skills",
  PROGRESS = "progress",
}

const Home = () => {
  const { user } = useUser();
  const [currentOption, setCurrentOption] = useState<Options>(Options.SKILLS);

  return (
    <div className="w-full bg-[#F9FAFB] h-fit">
      <Header />
      <div className="flex flex-col gap-2 items-center">
        <p className="text-3xl font-bold mt-8">
          {user ? `Hi ${user.firstName}!` : "Please register"}
        </p>
        <p className="text-xl mb-16">What can I help you today?</p>
        <div className="flex bg-[#F5F5F5] p-0.5 rounded-md">
          <span
            onClick={() => {
              if (currentOption !== Options.SKILLS) {
                setCurrentOption(Options.SKILLS);
              }
            }}
            className={clsx(
              "flex items-center cursor-pointer py-1 px-12 rounded-md",
              currentOption === Options.SKILLS ? "bg-white font-semibold" : ""
            )}
          >
            <HiAcademicCap className="text-2xl" />
            Skills
          </span>
          <span
            onClick={() => {
              if (currentOption !== Options.PROGRESS) {
                setCurrentOption(Options.PROGRESS);
              }
            }}
            className={clsx(
              "flex gap-1 items-center cursor-pointer py-1 px-12 rounded-md",
              currentOption === Options.PROGRESS ? "bg-white font-semibold" : ""
            )}
          >
            <FaChartLine className="text-2xl" />
            Progress
          </span>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Home;
