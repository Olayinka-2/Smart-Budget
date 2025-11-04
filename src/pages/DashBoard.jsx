import ProfileCup from "../components/ProfileCup";
import BalanceDisplay from "../components/BalanceDisplay";
import { FaSearch } from "react-icons/fa";
import CircularProgress from "../components/CircularProgress";
import WeeklySavingsChart from "../components/WeeklySavingsChart";
import Footer from "../components/Footer";

const DashBoard = () => {

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <div className="w-full py-4 px-5">
        <h1 className="font-semibold text-lg mb-3">
          Financial and Saving Dashboard
        </h1>

        <div className="flex flex-col gap-4">
          <ProfileCup />
          <BalanceDisplay />
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-blue-100 rounded-t-3xl flex-1 w-full py-8 px-5 sm:px-10 flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col gap-6 flex-1 overflow-hidden">
          {/* Search Bar */}
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex bg-white py-2 px-4 rounded-2xl items-center gap-2 shadow-sm">
              <FaSearch className="text-gray-500 text-sm sm:text-base" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 outline-none text-sm sm:text-base"
              />
            </div>

            {/* Summary Cards Layout */}
            <div className="flex flex-row gap-3 mt-6 w-full justify-center">
              {/* Left Column (Savings) */}
              <div className="w-[47%] bg-white rounded-2xl shadow-sm flex flex-col justify-between p-5">
                <div>
                  <p className="font-medium text-gray-800">Savings</p>
                  <p className="text-xs text-gray-500">$550,000</p>
                </div>
                <div className="mt-3 flex justify-center items-center">
                  <CircularProgress value={75} />
                </div>
              </div>

              {/* Right Column (Income + Expenses) */}
              <div className="w-[47%] flex flex-col gap-4">
                {/* Income Card */}
                <div className="flex-1 bg-white rounded-2xl shadow-sm p-5 flex flex-col justify-center">
                  <p className="font-medium text-gray-800">Income</p>
                  <div className="flex items-center gap-1 mt-1">
                    <p className="text-lg font-semibold">$40,000</p>
                    <p className="text-xs text-green-500 font-medium">+4.5%</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    Compounded to ($456,000) for a year
                  </p>
                </div>

                {/* Expenses Card */}
                <div className="flex-1 bg-white rounded-2xl shadow-sm p-5 flex flex-col justify-center">
                  <p className="font-medium text-gray-800">Expenses</p>
                  <div className="flex items-center gap-1 mt-1">
                    <p className="text-lg font-semibold">$22,000</p>
                    <p className="text-xs text-red-500 font-medium">-2.3%</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    Compared to last month ($21,500)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Chart */}
          <div className="max-w-5xl mx-auto w-full bg-white rounded-2xl p-4 sm:p-5 shadow-sm">
            <WeeklySavingsChart />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5">
          <Footer currentLocation={"/dashboard"} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
