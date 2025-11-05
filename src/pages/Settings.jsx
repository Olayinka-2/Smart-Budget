import React from "react";
import {
  FaArrowRight,
  FaUserCircle,
  FaIdCard,
  FaHandsHelping,
  FaBell,
  FaHistory,
  FaSun,
  FaUsers,
} from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { BiShieldQuarter } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Settings = () => {
  const settingsItems = [
    {
      label: "Profile Setting",
      icon: <FaUserCircle className="text-blue-500 text-3xl" />,
    },
    {
      label: "BVN Setting",
      icon: <BiShieldQuarter className="text-indigo-500 text-3xl" />,
    },
    {
      label: "NIN Setting",
      icon: <FaIdCard className="text-green-500 text-3xl" />,
    },
    {
      label: "Update Next of Kin",
      icon: <FaUsers className="text-pink-500 text-3xl" />,
    },
    {
      label: "Display Setting",
      icon: <FaSun className="text-yellow-500 text-3xl" />,
    },
    {
      label: "Help",
      icon: <FaHandsHelping className="text-orange-500 text-3xl" />,
    },
    {
      label: "Alert",
      icon: <FaBell className="text-red-500 text-3xl" />,
    },
    {
      label: "SmartBudget History",
      icon: <FaHistory className="text-gray-600 text-3xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="flex flex-col h-screen">

      <div className="flex items-center gap-2 p-4 border-b bg-white">
        <Link to="/dashboard">
          <BsArrowLeft className="text-lg font-semibold" />
        </Link>
        <h1 className="text-xl font-medium">Account Settings</h1>
      </div>

      {/* Scrollable Settings List */}
      <div className="flex-1 overflow-y-auto px-4 py-2 bg-white">
        {settingsItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center py-1.5 border-b border-gray-200 hover:bg-gray-50 transition-all"
          >
            <div className="bg-gray-100 p-2 rounded-full">{item.icon}</div>
            <p className="ml-4 text-base font-medium text-gray-700">
              {item.label}
            </p>
            <FaArrowRight className="ml-auto text-gray-400" />
          </div>
        ))}
      </div>

      {/* Fixed Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
      </div>
      {/* Header */}
    </div>
  );
};

export default Settings;
