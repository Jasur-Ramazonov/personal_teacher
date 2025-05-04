import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between md:px-20 px-5 md:py-5 py-2 sticky top-0 bg-white">
      <Link to={"/"} className="md:text-3xl text-xl font-bold">
        Personal Teacher
      </Link>
      <div className="flex items-center gap-2">
        <button className="w-[30px] h-[30px] flex justify-center items-center rounded-full ease-linear duration-150 hover:bg-slate-200">
          <FaBell />
        </button>
        <SignedOut>
          <div className="flex gap-2">
            <SignInButton>
              <button className="px-6 py-1.5 bg-blue-600 text-white rounded-md">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="px-6 py-1.5 bg-blue-600 text-white rounded-md">
                Sign up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
