import React, { useRef } from "react";
import profile from "../assets/loginProfile.jpg";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate()
  const loginInput = useRef();
  const handleClick = (e)=> {
    e.preventDefault();
    if(loginInput.current.value.length > 0) {
      navigate('/dashboard')
    }
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-50 via-white to-blue-100 px-4">
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-xl pt-20 pb-10 px-6 flex flex-col items-center">

        <div className="relative w-[140px] sm:w-[160px] md:w-[180px] rounded-2xl shadow-lg bg-blue-100">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-16 z-10">
            
            <div className="w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 shadow-xl rounded-t-3xl rounded-b-md overflow-hidden transition-all duration-300">
    
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Cup Space for Image */}
          <div className="h-20 sm:h-24 md:h-28"></div>
        </div>

        <p className="text-gray-800 text-center text-base sm:text-lg font-medium mt-4">
          SamuelIborida@gmail.com
        </p>

        <form className="w-full flex flex-col gap-5 mt-6"
        onSubmit={handleClick}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
            ref={loginInput}
              type="password"
              required
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          <div className="text-right">
            <p className="text-sm text-blue-600 hover:underline cursor-pointer">
              Forgot password?
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow-md transition"
          >
            Log In
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-6 text-center">
          Need help?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Contact Support
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;


