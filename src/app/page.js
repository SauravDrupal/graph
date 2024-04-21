import BarChart from "@/components/BarChart";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>I am graph</h1>
      <BarChart/>
    </div>
  );
}
