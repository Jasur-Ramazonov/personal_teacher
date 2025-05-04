import { FaBook, FaHeadphones, FaMicrophone, FaPen } from "react-icons/fa";
import writing from "./photos/b24b1e2c1511292e938bbc1953786227.jpg";
import speaking from "./photos/ce8a558105a3238aa60f234eeec1c4a8.jpg";
import reading from "./photos/1ab3359e54f1cd2c54e8323ebf3b11df.jpg";
import listening from "./photos/cbd8bdc042021056773e7618469da82e.jpg";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();
  return (
    <div className="md:px-20 px-5 md:py-5 py-2 bg-[#F9FAFB] grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
      <div className="rounded-xl shadow-lg overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img
            src={writing}
            alt="writing"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4 gap-3">
            <FaPen className="text-xl" />
            <h3 className="text-xl font-semibold text-gray-900">Writing</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Improve your writing skills with guided exercises and feedback
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Progress</span>
              <span className="text-gray-700 font-medium">65%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className={`bg-blue-500 rounded-full w-[65%] h-full`}></div>
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/writing");
            }}
            className="mt-5 w-full rounded-lg bg-blue-500 text-white cursor pointer py-2 px-4 hover:bg-blue-600 transition-colors"
          >
            Continue Learning
          </button>
        </div>
      </div>
      <div className="rounded-xl shadow-lg overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img
            src={speaking}
            alt="writing"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4 gap-3">
            <FaMicrophone className="text-xl" />
            <h3 className="text-xl font-semibold text-gray-900">Speaking</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Practice conversation skills and pronunciation with interactive
            sessions
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Progress</span>
              <span className="text-gray-700 font-medium">42%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className={`bg-blue-500 rounded-full w-[42%] h-full`}></div>
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/speaking");
            }}
            className="mt-5 w-full rounded-lg bg-blue-500 text-white cursor pointer py-2 px-4 hover:bg-blue-600 transition-colors"
          >
            Continue Learning
          </button>
        </div>
      </div>
      <div className="rounded-xl shadow-lg overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img
            src={reading}
            alt="writing"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4 gap-3">
            <FaBook className="text-xl" />
            <h3 className="text-xl font-semibold text-gray-900">Reading</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Enhance reading comprehension through diverse materials
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Progress</span>
              <span className="text-gray-700 font-medium">78%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className={`bg-blue-500 rounded-full w-[78%] h-full`}></div>
            </div>
          </div>
          <button className="mt-5 w-full rounded-lg bg-blue-500 text-white cursor pointer py-2 px-4 hover:bg-blue-600 transition-colors">
            Continue Learning
          </button>
        </div>
      </div>
      <div className="rounded-xl shadow-lg overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img
            src={listening}
            alt="writing"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4 gap-3">
            <FaHeadphones className="text-xl" />
            <h3 className="text-xl font-semibold text-gray-900">Listening</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Develop listening skills with audio exercises and tests
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Progress</span>
              <span className="text-gray-700 font-medium">55%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className={`bg-blue-500 rounded-full w-[55%] h-full`}></div>
            </div>
          </div>
          <button className="mt-5 w-full rounded-lg bg-blue-500 text-white cursor pointer py-2 px-4 hover:bg-blue-600 transition-colors">
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
