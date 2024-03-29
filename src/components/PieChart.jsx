import React from "react";
import Chart from "chart.js";

export default function PieChart() {
  React.useEffect(() => {
    var config = {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: true,
          text: "Sales Charts",
          fontColor: "#000",
        },
        legend: {
          labels: {
            fontColor: "#000",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#000",
              },
              display: false,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "#000",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#000",
              },
              display: false,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "#000",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "#000",
                zeroLineColor: "#000",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("Pie-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words  mb-6 shadow-lg rounded bg-blueGray-700 ml-3 piechart">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-slate-800 text-xl font-bold">Users</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto ">
          {/* Chart */}
          <div className="relative " style={{ height: 350 }}>
            <canvas id="Pie-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
