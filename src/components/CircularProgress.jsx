import React from "react";
import Chart from "react-apexcharts";

const CircularProgress = ({ value = 75 }) => {
  const options = {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        hollow: { size: "70%" },
        track: {
          background: "#e5e7eb", // gray background ring
          strokeWidth: "90%",
        },
        dataLabels: {
          name: { show: false },
          value: {
            show: true,
            fontSize: "20px",
            fontWeight: 600,
            color: "#000", // green-600
            offsetY: 5,
          },
        },
      },
    },
    colors: ["#16a34a"], // ring color
  };

  const series = [value];

  return (
    <div className="flex flex-col items-center">
      <Chart options={options} series={series} type="radialBar" width="150" />
    </div>
  );
};

export default CircularProgress;
