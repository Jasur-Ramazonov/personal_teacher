import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="flex justify-end p-2">
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
    </header>
  );
};

export default Header;
