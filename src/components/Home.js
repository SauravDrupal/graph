"use client"
import { useState } from "react";
import Image from "next/image";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";
import DoughnutChart from "./DoughnutChart";
import PieChart from "./pieChart";


const HomePage = () => {
    const [chartName, setChartName] = useState('bar');
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <select className="p-2 text-2xl font-bold text-black bg-white rounded shadow shadow-black" value={chartName} onChange={(e) => setChartName(e.target.value)}>
                <option value="bar">Bar Chart</option>
                <option value="doughnut">Doughnut Chart</option>
                <option value="line">Line Chart</option>
                <option value="pie">Pie Chart</option>
                <option value="radar">Radar Chart</option>

            </select>
            {chartName == "bar" && <BarChart />}

            {chartName == "line" && <LineChart /> }

            {chartName == "pie" && <PieChart /> }

            {chartName == "doughnut" && <DoughnutChart /> }

            {chartName == "radar" && <RadarChart /> }
        </div>
    );
}

export default HomePage;