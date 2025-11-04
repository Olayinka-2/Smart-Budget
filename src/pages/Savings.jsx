import React from "react";
import { FaArrowLeft, FaChartLine, FaPiggyBank, FaLock, FaSeedling } from "react-icons/fa";
import { Link } from "react-router-dom";
import Plan from "../assets/Plans.svg";
import Footer from "../components/Footer"

const Savings = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-blue-50 to-blue-300 flex flex-col">
      <div className="flex-1 flex flex-col px-4 py-8 gap-2 ">
  
        <div className="flex items-center mb-4">
          <Link to="/dashboard">
            <FaArrowLeft className="text-lg font-semibold" />
          </Link>
        </div>

        <div className="text-center">
          <img src={Plan} alt="Financial plan" className="mx-auto" />
          <p className="text-sm mt-3 max-w-md mx-auto text-gray-700">
            Create a Financial plan for a future period, whether for an
            individual, a household, or a business goal.
          </p>
        </div>

        <div className="mt-8">
          <p className="text-lg font-semibold mb-4 text-gray-800">
            Savings and Investment Plan
          </p>

          <div className="grid grid-cols-2 gap-4">

            <div className="p-6 rounded-2xl bg-blue-100 border-2 border-blue-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <FaChartLine className="text-blue-500 text-2xl" />
                <p className="text-lg font-semibold text-blue-700">Track Spending</p>
              </div>
              <p className="text-sm text-gray-800">
                Evaluate what and how you spend.
              </p>
            </div>

            {/* Green - Target Savings */}
            <div className="p-6 rounded-2xl bg-green-100 border-2 border-green-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <FaPiggyBank className="text-green-500 text-2xl" />
                <p className="text-lg font-semibold text-green-700">Target Savings</p>
              </div>
              <p className="text-sm text-gray-800">
                Set goals and save consistently.
              </p>
            </div>

            {/* Red - Savings Locking */}
            <div className="p-6 rounded-2xl bg-red-100 border-2 border-red-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <FaLock className="text-red-500 text-2xl" />
                <p className="text-lg font-semibold text-red-700">Savings Locking</p>
              </div>
              <p className="text-sm text-gray-800">
                Secure your funds for a fixed period.
              </p>
            </div>

            {/* Gray - Investing */}
            <div className="p-6 rounded-2xl bg-gray-100 border-2 border-gray-300 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <FaSeedling className="text-gray-900 text-2xl" />
                <p className="text-lg font-semibold text-gray-900">Investing</p>
              </div>
              <p className="text-sm text-gray-800">
                Grow your wealth through smart investments.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-auto">


        <Footer bgColor={false} />
        </div>

      </div>
    </div>
  );
};

export default Savings;
