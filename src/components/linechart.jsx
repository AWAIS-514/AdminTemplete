import React, { useState } from "react";
import Chart from "chart.js";

export default function CardLineChart() {
  let [loadingS, setLoadingS] = useState(false);

  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#5E72E4",
            borderColor: "#5E72E4",
            data: [40, 68, 86, 74, 56, 60, 100],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          display: false,
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
                fontColor: "#fff",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "#fff",
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
                fontColor: "#fff",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "#fff",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "#19204D",
                zeroLineColor: "#fff",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div
        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded  ml-3 linchart"
        style={{ backgroundColor: "#19204D" }}
      >
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div
              className="relative w-full max-w-full flex-grow flex-1"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <h2 className="text-2xl font-bold cw">Business Groth</h2>
              <div class="flex items-center flex-wrap">
                <div class="relative">
                  <input
                    name="end"
                    type="date"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <span class="mx-4 text-gray-500">to</span>
                <div class="relative">
                  <input
                    name="end"
                    type="date"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            disabled={loadingS ? true : false}
            type="button"
            class="chartSubmitButton text-gray-900  border border-gray-800 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={() => {
              setLoadingS(true);
              setTimeout(() => {
                setLoadingS(false);
              }, 2000);
            }}
          >
            Submit
          </button>
        </div>

        <div className="p-4 flex-auto  mt-4">
          {/* Chart */}
          <div
            className="relative "
            style={{
              height: 350,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {loadingS ? (
              <img
                src={require("../Assets/loadingS.gif")}
                style={{ width: 150, objectFit: "contain" }}
              />
            ) : (
              <></>
            )}
            <canvas
              style={{ display: loadingS ? "none" : "block" }}
              id="line-chart"
            ></canvas>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
