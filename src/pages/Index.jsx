import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-white via-blue-50 to-blue-200">
      {/* Splash screen */}
      {display ? (
        <div className="h-screen flex flex-col justify-center items-center gap-4 animate-fadeIn">
          <img className="w-28 md:w-36" src={Logo} alt="App Logo" />
          <p className="text-base md:text-lg font-medium text-gray-700">
            Personal Finance and Budget App
          </p>
        </div>
      ) : (
        // Main content
        <div className="flex flex-col items-center justify-center text-center px-6 py-10 gap-10">
          {/* Hero images */}
          <div className="flex flex-col items-center gap-6">
            <img
              src={hero1}
              alt="Finance illustration 1"
              className="w-64 sm:w-[60%] md:w-[50%] drop-shadow-md"
            />
            <img
              src={hero2}
              alt="Finance illustration 2"
              className="w-60 sm:w-[50%] md:w-[40%] -mt-6 drop-shadow-md"
            />
          </div>

          {/* Text section */}
          <div className="max-w-xl flex flex-col items-center gap-6">
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-blue-800">
              Personal Finance & Budget App
            </h1>

            <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-700 leading-relaxed">
              Take control of your money and reach your financial goals. Easily track expenses,
              plan budgets, and visualize your growth — all in one beautiful, secure app.
            </p>

            {/* CTA button */}
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95"
            >
              Get Started
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 pt-2">
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
