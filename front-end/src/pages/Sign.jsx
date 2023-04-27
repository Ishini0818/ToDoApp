import Login from "../components/Login";
import { useState } from "react";
import SignUp from "../components/SignUp";

const Sign = () => {
    const [ isSignIn, setSignIn ] = useState(true);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row mt-14 w-5/12 justify-around">
        <button className="rounded bg-teal-500 px-5 py-2 text-white font-semibold hover:bg-teal-600 hover:shadow-lg shadow-md"
        onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
        <button className="rounded bg-teal-500 px-5 py-2 text-white font-semibold hover:bg-teal-600 hover:shadow-lg shadow-md"
        onClick={() => setSignIn(false)}
        >
          Sign Up
        </button>
      </div>
      {
        isSignIn ? <Login /> : <SignUp />
      }
    </div>
  );
};

export default Sign;
