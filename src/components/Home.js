"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";
import DoughnutChart from "./DoughnutChart";
import PieChart from "./PieChart";


const HomePage = () => {
    const [chartName, setChartName] = useState('bar');
    return (
        <>
            <ul>
                <li className="w-[250px] h-[50px] border-2 border-black rounded-[6px] text-center pt-[10px] hover:bg-[#f0f0f0]"><Link href="/stopwatch">Redirect To Stopwatch</Link></li>
            </ul>
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1>Next.js Graphs</h1>
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


                <h1>Just for testing</h1>
            </div>
        </>
    );
}

export default HomePage;