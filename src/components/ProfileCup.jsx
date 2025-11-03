import React from "react";
import profile from "../assets/loginProfile.jpg";

const ProfileCup = ({ name = "Samuel Iborida" }) => {
  return (
    <div className="flex items-center gap-2 sm:gap-4 mt-1">
      {/* Profile Cup */}
      <div className="relative shrink-0 w-[65px] sm:w-[75px] md:w-[85px] h-[70px] sm:h-[80px] md:h-[90px] flex items-end justify-center">
        {/* Cup Body */}
        <div className="relative w-full bg-white rounded-2xl shadow-md overflow-visible">
          {/* Profile Image */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 sm:-top-7 md:-top-8 z-10">
            <div className="w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-18 rounded-t-2xl rounded-b-md overflow-hidden shadow-lg border border-gray-100">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Empty space inside cup */}
          <div className="h-10 sm:h-12 md:h-14"></div>
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center leading-tight">
        <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg">
          {name}
        </p>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base">
          Ready to take control of your finances?
        </p>
      </div>
    </div>
  );
};

export default ProfileCup;
