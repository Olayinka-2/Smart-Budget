import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 3000);
    return () => clearTimeout();
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col">
      {display ? (
        <div className="h-screen flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <img className="w-25 sm:w-30 lg:w-40 mx-auto" src={Logo} alt="" />
            <p className="text-base font-medium">
              Personal Finance and Budget App
            </p>
          </div>
        </div>
      ) : (
        <div className="relative flex flex-col md:flex-row flex-1 w-full md:items-center">
          <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r md:from-white via-blue-50 to-blue-800 z-0"></div>

          <div className="absolute inset-0 backdrop-blur-sm  z-0"></div>

          <div className="z-10 h-full flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="hero-image flex-1 md:flex justify-center items-center">
              <img src={hero1} alt="" />
              <img
                src={hero2}
                alt=""
                className="-mt-10 mx-auto md:hidden max-w-xs"
              />
            </div>
            <div className="flex-1 text-center md:text-left flex flex-col gap-6 md:gap-8 text-gray-800 max-w-lg">
              <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-blue-800">
                Personal Finance & Budget App
              </h1>

              <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-700 leading-relaxed">
                Take control of your money and reach your financial goals.
                Easily track expenses, plan budgets, and visualize your growth —
                all in one beautiful, secure app.
              </p>

              <button
                onClick={() => navigate("/login")}
                className="cursor-pointer hover:scale-110 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-blue-50 active:scale-95 transition-all duration-300 w-fit self-center md:self-start"
              >
                Get Started
              </button>

              <div className="flex justify-center md:justify-start gap-2 pt-2">
                <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
                <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
