import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Auth from "./pages/auth";
import DashBoard from "./pages/DashBoard";
import Savings from "./pages/Savings";
import Alert from "./pages/Alert";
import Settings from "./pages/Settings";
import TransactionHistory from "./pages/TransactionHistory";

const App = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center 
                    bg-linear-to-br from-gray-100 via-blue-50 to-blue-100
                    sm:from-gray-50 sm:via-blue-100 sm:to-gray-200">

      <div className="w-full sm:w-[420px] lg:w-[460px] bg-white min-h-screen sm:min-h-[90vh]
                      sm:rounded-3xl sm:shadow-xl overflow-hidden border border-gray-200">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/alerts" element={<Alert />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/trHistory" element={<TransactionHistory />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
