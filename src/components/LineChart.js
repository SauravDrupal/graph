"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
    const chartRef = useRef(null); // Ref to hold the chart instance

    useEffect(() => {
        if (chartRef.current) {
            // If chart already exists, destroy it
            chartRef.current.destroy();
        }

        const ctx = document.getElementById('myChartLine').getContext('2d');
        const newChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [2, 5, 3, 5, 2, 3, 2, 5, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        type: "category"
                    },
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'My Line Chart'
                    }
                }
            }
        });

        // Save the chart instance to the ref
        chartRef.current = newChart;

        // Cleanup: Destroy chart when component unmounts
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return <canvas
        id="myChartLine"
        style={{position: "realtive", maxWidth: "90vw", maxHeight: "80vh" }} // Set inline styles for width and height
        width="400"
        height="300"
    ></canvas>;
};

export default LineChart;
