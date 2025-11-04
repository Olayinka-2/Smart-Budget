import React, { useState } from "react";
import { FaArrowDown, FaArrowLeft, FaHistory } from "react-icons/fa";

const transactionsData = {
  "Aug. 2025": {
    in: 3000,
    out: 350,
    list: [
      {
        id: 1,
        name: "Fadero Grace",
        date: "Aug. 5th 15:00:09",
        amount: "+$88,000.00",
        status: "Successful",
        type: "in",
      },
      {
        id: 2,
        name: "Book Purchase",
        date: "Aug. 9th 12:45:00",
        amount: "-$50.00",
        status: "Successful",
        type: "out",
      },
    ],
  },
  "Sep. 2025": {
    in: 4200,
    out: 500,
    list: [
      {
        id: 3,
        name: "Tobi Ade",
        date: "Sep. 4th 10:23:45",
        amount: "+$120.00",
        status: "Successful",
        type: "in",
      },
      {
        id: 4,
        name: "Utility Bill",
        date: "Sep. 6th 08:17:33",
        amount: "-$200.00",
        status: "Pending",
        type: "out",
      },
    ],
  },
  "Oct. 2025": {
    in: 3500,
    out: 700,
    list: [
      {
        id: 5,
        name: "Project Bonus",
        date: "Oct. 10th 19:10:00",
        amount: "+$400.00",
        status: "Successful",
        type: "in",
      },
    ],
  },
};

const TransactionHistory = () => {
  const [selectedMonth, setSelectedMonth] = useState("View All");

  const months = Object.keys(transactionsData);
  const filteredMonths =
    selectedMonth === "View All" ? months : [selectedMonth];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-5 flex flex-col h-screen">
        <div className="flex flex-col gap-3 w-[90%] mx-auto mb-5">
          <div className="flex justify-between items-center">
            <FaArrowLeft className="text-lg font-semibold" />
            <p className="text-blue-500 text-xl font-medium">Download</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <FaHistory />
              <p className="font-medium text-sm">Recent Transactions</p>
            </div>
            <div>
              <select
                name="viewMonth"
                id="viewMonth"
                className="bg-blue-100 px-4 py-1.5 rounded-full outline-none focus:ring focus:ring-blue-400"
                onChange={(e) => setSelectedMonth(e.target.value)}
                value={selectedMonth}
              >
                <option value="View All">View All</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Scrollable Transaction Section */}
        <div className="flex-1 bg-blue-100 overflow-y-auto pb-10 flex flex-col">
          <div className="w-[93%] mx-auto space-y-6 mt-5">
            {filteredMonths.map((month) => {
              const data = transactionsData[month];
              return (
                <div
                  key={month}
                  className="rounded-2xl bg-white py-5 px-3 shadow-sm"
                >
                  {/* Month Header */}
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <div>
                      <p className="text-lg font-medium">{month}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <p>
                          <span className="text-gray-400">In:</span> ${data.in}
                        </p>
                        <p>
                          <span className="text-gray-400">Out:</span> $
                          {data.out}
                        </p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-700 rounded-xl text-white font-medium hover:bg-blue-600 transition">
                      Analysis
                    </button>
                  </div>

                  {/* Transaction List */}
                  <div className="mt-4 space-y-4">
                    {data.list.map((tx) => (
                      <div
                        key={tx.id}
                        className="flex items-center gap-2 border-b border-gray-100 pb-3"
                      >
                        <FaArrowDown
                          className={`p-1 rounded-full font-bold text-lg ${
                            tx.type === "in"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600 rotate-180"
                          }`}
                        />
                        <div>
                          <p className="font-semibold">
                            {tx.type === "in"
                              ? `Money from ${tx.name}`
                              : `Payment to ${tx.name}`}
                          </p>
                          <p className="text-gray-400 text-sm">{tx.date}</p>
                        </div>
                        <div className="ml-auto flex flex-col items-end">
                          <p
                            className={`font-medium ${
                              tx.type === "in"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {tx.amount}
                          </p>
                          <p
                            className={`px-2 py-0.5 text-xs rounded-2xl ${
                              tx.status === "Successful"
                                ? "bg-green-100 text-green-600"
                                : "bg-yellow-100 text-yellow-600"
                            }`}
                          >
                            {tx.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
