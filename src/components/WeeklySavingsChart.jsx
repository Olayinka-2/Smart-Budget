import React, { useState, useMemo } from "react";
import Chart from "react-apexcharts";

const WeeklySavingsChart = ({ accountCreatedAt = "2024-05-10" }) => {
  // Generate all months since account was opened
  const months = useMemo(() => {
    const getMonthsSince = (startDate) => {
      const start = new Date(startDate);
      const now = new Date();
      const result = [];
      let current = new Date(start);

      while (current <= now) {
        const monthName = current.toLocaleString("default", { month: "long" });
        const year = current.getFullYear();
        result.push(`${monthName} ${year}`);
        current.setMonth(current.getMonth() + 1);
      }

      return result;
    };

    return getMonthsSince(accountCreatedAt);
  }, [accountCreatedAt]);

  const [selectedMonth, setSelectedMonth] = useState(months.at(-1)); // default: most recent month

  // Generate some fake weekly data
  const generateData = () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 30) + 5);

  const monthlyData = useMemo(() => {
    const data = {};
    months.forEach((m) => (data[m] = generateData()));
    return data;
  }, [months]);

  const options = {
    chart: { type: "bar", toolbar: { show: false }, background: "transparent" },
    plotOptions: {
      bar: { borderRadius: 6, columnWidth: "50%", distributed: true },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: { style: { colors: "#6b7280", fontSize: "12px" } },
    },
    yaxis: {
      title: { text: "Savings (hrs)", style: { color: "#6b7280" } },
      labels: { style: { colors: "#6b7280" } },
    },
    legend: {
      show: false, // 👈 hides the legend boxes at the bottom
    },
    grid: { borderColor: "#e5e7eb", strokeDashArray: 4 },
    colors: [
      "#3b82f6",
      "#BFDBFE",
      "#93C5FD",
      "#60A5FA",
      "#3B82F6",
      "#2563EB",
      "#1D4ED8",
      "#1E40AF",
    ],
    tooltip: { y: { formatter: (val) => `${val} hrs` } },
  };

  const series = [
    {
      name: "Weekly Savings",
      data: monthlyData[selectedMonth],
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl p-5 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Weekly Savings</h2>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-md px-3 py-1 outline-none focus:ring-2 focus:ring-blue-500"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default WeeklySavingsChart;
