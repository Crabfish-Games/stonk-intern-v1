import React, { useContext, useState, useEffect } from "react";
import { Line } from "@reactchartjs/react-chart.js";
import { MarketContext } from "../context/market-context";

import { gridMax, gridMin } from "../data/settings";

export default () => {
  const context = useContext(MarketContext);
  const [data, setData] = useState([]);
  const mapChartData = (market) => {
    const labels = [...Array(context.numberOfDays).keys()];
    setData({
      labels: labels,
      datasets: [
        {
          label: "Stonk Value",
          data: market,
          fill: true,
          backgroundColor: "rgb(255, 99, 132, 0.4)",
          borderColor: "rgba(255, 99, 132, 0.6)",
          pointRadius: 0
        }
      ]
    });
  };
  useEffect(() => {
    mapChartData(context.gameState.market);
  }, [context.gameState]);
  return (
    <div className="mb-2">
      <Line data={data} options={options} />
    </div>
  );
};

const options = {
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        type: "linear",
        display: true,
        id: "y-axis-0",
        ticks: {
          beginAtZero: false,
          min: gridMin,
          max: gridMax,
          callback: (value) => {
            if (value % 1 === 0) {
              return value;
            }
          }
        }
      }
    ]
  }
};
