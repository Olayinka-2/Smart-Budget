import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";

const Index = () => {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 3000);
    return () => clearTimeout();
  },[]);
  return (
    <div className="h-screen w-full overflow-hidden">
      {display ? (
        <div className="h-full flex justify-center items-center">

        <div className="flex flex-col gap-4">
          <img className="w-25 sm:w-30 lg:w-40 mx-auto" src={Logo} alt="" />
          <p className="text-base font-medium">
            Personal Finance and Budget App
          </p>
        </div>
        </div>
      ) : (
        <div class="relative flex flex-col md:flex-row h-full w-full">
          <div class="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r md:from-white via-blue-50 to-blue-800 z-0"></div>

          <div class="absolute inset-0 backdrop-blur-sm  z-0"></div>

          <div className="z-10 h-full flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="hero-image flex-1 md:flex justify-center items-center">
              <img src={hero1} alt="" />
              <img
                src={hero2}
                alt=""
                className="-mt-10 mx-auto md:hidden max-w-xs"
              />
            </div>
            <div className="hero-writeup flex-1 p-10">
              <div className="text-center flex flex-col gap-7 text-gray-100 max-w-2/3 mx-auto">
                <h1 className="font-bold text-3xl">
                  Personal Finance & Budget App
                </h1>
                <p className="font-medium text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate sunt inventore odio maxime aliquid consequatur ut
                  accusantium quisquam dignissimos placeat.
                </p>
                <button className="text-blue-500 outline-none rounded-4xl px-4 py-2 self-center font-semibold text-xl bg-white cursor-pointer">
                  Getting Started
                </button>
                <div className=" mx-auto flex gap-2 items-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
