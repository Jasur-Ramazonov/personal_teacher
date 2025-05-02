import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between p-2">
      <Link to={"/"} className="text-3xl font-bold">
        Personal Teacher
      </Link>
      <div>
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
