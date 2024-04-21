"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = () => {
    const chartRef = useRef(null); // Ref to hold the chart instance

    useEffect(() => {
        if (chartRef.current) {
            // If chart already exists, destroy it
            chartRef.current.destroy();
        }

        const ctx = document.getElementById('myChartRadar').getContext('2d');
        const newChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [{
                    label: 'My Radar Chart',
                    data: [65, 59, 90, 81, 56, 55, 40],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
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

    return (
        <canvas
            id="myChartRadar"
            style={{ maxWidth: '400px', maxHeight: '300px' }} // Set inline styles for max-width and max-height
            width="400"
            height="300"
        ></canvas>
    );
};

export default RadarChart;
