import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const BalanceDisplay = ({ balance = "$400,000" }) => {
  const [showBalance, setShowBalance] = useState(false);
  return (
    <div className="bg-blue-500 flex justify-between items-center py-2 px-4 rounded-xl text-xs text-white font-thin">
      <div className="flex flex-col gap-1 ">
        <p>Available Balance</p>
        <div className="flex items-center gap-2">
          <p>{showBalance ? balance : "****"}</p>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-gray-500 hover:text-blue-500 transition-colors"
            aria-label={showBalance ? "Hide balance" : "Show balance"}
          >
            {!showBalance ? (
              <FaEyeSlash size={15} color="white" />
            ) : (
              <FaEye size={15} color="white" />
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link to={'/trHistory'}>
          <p>Transaction History</p>
        </Link>
        <button className="font-medium py-1 px-3 rounded-full bg-white text-blue-500">
          +Add Money
        </button>
      </div>
    </div>
  );
};

export default BalanceDisplay;
