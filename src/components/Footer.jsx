import React from "react";
import { FaPiggyBank, FaHome, FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = ({bgColor = true}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/dashboard", icon: <FaHome /> },
    { name: "Savings", path: "/savings", icon: <FaPiggyBank /> },
    { name: "Alert", path: "/alerts", icon: <IoMdNotificationsOutline /> },
    { name: "Setting", path: "/settings", icon: <FaUserCircle /> },
  ];

  return (
    <footer className={`w-full ${bgColor && 'bg-white shadow-inner'} py-3 px-6 rounded-t-2xl flex justify-between items-center`}>
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center text-gray-600 hover:text-blue-500 transition-colors"
          >
            <div
              className={`text-2xl ${
                isActive ? "text-blue-500" : "text-gray-700"
              }`}
            >
              {item.icon}
            </div>
            <p
              className={`text-xs font-medium mt-1 ${
                isActive ? "text-blue-500" : "text-gray-700"
              }`}
            >
              {item.name}
            </p>
          </button>
        );
      })}
    </footer>
  );
};

export default Footer;
