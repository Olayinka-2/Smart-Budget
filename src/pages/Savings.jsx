import React from "react";
import {
  FaChartLine,
  FaPiggyBank,
  FaLock,
  FaSeedling,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Plan from "../assets/Plans.svg";
import Footer from "../components/Footer";
import { BsArrowLeft } from "react-icons/bs";

const Savings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-200">
      {/* Header */}
      <div className="flex items-center px-5 py-4 shadow-sm bg-white/70 backdrop-blur-sm">
        <Link to="/dashboard">
          <BsArrowLeft className="text-2xl text-gray-700 hover:text-blue-600 transition" />
        </Link>
        <h2 className="mx-auto text-lg font-semibold text-gray-800">
          Savings Plan
        </h2>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col px-5 py-8">
        {/* Illustration */}
        <div className="text-center mb-6">
          <img
            src={Plan}
            alt="Financial plan"
            className="mx-auto w-48 md:w-56 drop-shadow-md"
          />
          <p className="text-sm mt-3 max-w-sm mx-auto text-gray-600 leading-relaxed">
            Create a financial plan for your goals — personal, family, or
            business. Build discipline and grow your savings smartly.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="mt-6">
          <p className="text-lg font-semibold mb-4 text-gray-800 text-center">
            Savings & Investment Options
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* Spending Tracker */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-200 shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <FaChartLine className="text-blue-600 text-2xl" />
                <p className="text-base font-semibold text-blue-700">
                  Track Spending
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-snug">
                Analyze and understand your spending habits.
              </p>
            </div>

            {/* Target Savings */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 border border-green-200 shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <FaPiggyBank className="text-green-600 text-2xl" />
                <p className="text-base font-semibold text-green-700">
                  Target Savings
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-snug">
                Set financial goals and save towards them consistently.
              </p>
            </div>

            {/* Savings Locking */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-red-100 to-rose-200 border border-rose-200 shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <FaLock className="text-rose-600 text-2xl" />
                <p className="text-base font-semibold text-rose-700">
                  Savings Lock
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-snug">
                Secure your funds for a set period and resist impulse spending.
              </p>
            </div>

            {/* Investing */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <FaSeedling className="text-gray-800 text-2xl" />
                <p className="text-base font-semibold text-gray-800">
                  Investing
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-snug">
                Grow your wealth through strategic and smart investments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer bgColor={false} />
    </div>
  );
};

export default Savings;
