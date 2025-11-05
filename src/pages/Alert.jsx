import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RiMoneyPoundBoxFill, RiMoneyDollarCircleFill } from "react-icons/ri";

const Alert = () => {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-white via-blue-50 to-blue-100">
      <div className="flex flex-col px-5 py-8 gap-3 h-screen">
        {/* Header */}
        <div className="flex items-center mb-4 gap-2">
          <Link to="/dashboard">
            <BsArrowLeft className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition" />
          </Link>
          <p className="text-xl font-semibold text-gray-800">
            Alert Notification
          </p>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Filter Tabs */}
          <div className="w-[90%] mx-auto bg-blue-100 rounded-full p-1 flex justify-between items-center shadow-inner">
            {["Daily", "Weekly", "Monthly"].map((tab, index) => (
              <button
                key={tab}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  index === 1
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:bg-blue-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-6 px-2">
            <p className="text-lg font-semibold text-gray-800">
              Weekly Spending Summary
            </p>
            <p className="text-gray-600 text-sm leading-5 mt-1">
              Your weekly money report is ready. Let’s see how you did! Track
              your habits and adjust your budget wisely.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="flex items-center gap-4 mt-5">
            <div className="flex-1 p-4 flex flex-col gap-2 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center">
                <RiMoneyPoundBoxFill className="text-4xl text-blue-500" />
                <BiDotsHorizontalRounded className="text-2xl text-gray-400" />
              </div>
              <p className="text-sm text-gray-400">Income</p>
              <p className="text-lg font-semibold text-gray-800">$400,000.00</p>
            </div>

            <div className="flex-1 p-4 flex flex-col gap-2 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center">
                <RiMoneyDollarCircleFill className="text-4xl text-green-500" />
                <BiDotsHorizontalRounded className="text-2xl text-gray-400" />
              </div>
              <p className="text-sm text-gray-400">Expenses</p>
              <p className="text-lg font-semibold text-gray-800">$125,000.00</p>
            </div>
          </div>

          {/* Transaction Updates List */}
          <div className="mt-6 overflow-y-auto bg-white rounded-2xl shadow-sm border border-gray-100">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex items-center py-4 px-4 text-base border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <BiDotsHorizontalRounded className="border border-gray-300 p-1.5 rounded-full text-3xl text-gray-600" />
                    <p className="font-medium text-gray-700">
                      Update Next of Kin
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-500 font-medium">20%</p>
                    <p className="text-gray-800">$400,000.00</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Alert;
