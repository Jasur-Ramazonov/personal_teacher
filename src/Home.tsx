import Header from "./Header";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const Home = () => {
  const { user } = useUser();

  return (
    <div>
      <Header />
      <div className="flex flex-col gap-2 items-center w-full">
        <p className="text-2xl font-semibold mt-8">
          {user ? `Hi ${user.firstName}!` : "Please register"}
        </p>
        <p className="text-2xl font-semibold mb-16">
          What can I help you today?
        </p>
        <Link
          className="bg-gray-300 py-3 w-80 text-center text-2xl rounded-md cursor-pointer ease-linear duration-150 hover:scale-110"
          to={"/writing"}
        >
          Writing
        </Link>
        <Link
          className="bg-gray-300 py-3 w-80 text-center text-2xl rounded-md cursor-pointer ease-linear duration-150 hover:scale-110"
          to={"/speaking"}
        >
          Speaking
        </Link>
      </div>
    </div>
  );
};

export default Home;
