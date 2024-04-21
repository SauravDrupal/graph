"use client"
import { useRef, useEffect } from "react";
import { Chart } from "chart.js";
export default function BarChart() {
    const chartRef = useRef(null);
    // useEffect(() => {
    //     if (chartRef.current) {
    //         if (chartRef.current.chart) {
    //             chartRef.current.chart.destroy();
    //         }
    //     }
    //     if (chartRef.current) {
    //         const context = chartRef.current.getContext("2d");
    //         const newChart = new Chart(context, {
    //             type: "bar",
    //             data: {
    //                 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //                 datasets: [
    //                     {
    //                         label: "# of Votes",
    //                         data: [12, 19, 3, 5, 2, 3],
    //                         backgroundColor: [
    //                             "rgba(255, 99, 132, 0.2)",
    //                             "rgba(54, 162, 235, 0.2)",
    //                             "rgba(255, 206, 86, 0.2)",
    //                             "rgba(75, 192, 192, 0.2)",
    //                             "rgba(153, 102, 255, 0.2)",
    //                             "rgba(255, 159, 64, 0.2)",
    //                         ],
    //                         borderColor: [
    //                             "rgba(255, 99, 132, 1)",
    //                             "rgba(54, 162, 235, 1)",
    //                             "rgba(255, 206, 86, 1)",
    //                             "rgba(75, 192, 192, 1)",
    //                         ],
    //                         borderWidth: 1,
    //                     },
    //                 ],
    //             },
    //             options: {
    //                 scales: {
    //                     x: {
    //                         type: "category",
    //                     },
    //                     y: {
    //                         beginAtZero: true,
    //                     },
    //                 },
    //             },

    //         });
    //     }
    //     chartRef.current.chart = newChart;
    // }, [])
    return (<div>
        <h1>Hi, I am bar chart</h1>
    </div>)
}