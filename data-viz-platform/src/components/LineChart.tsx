import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const dummyData = [
  { name: "Apr", value: 20000 },
  { name: "May", value: 48000 },
  { name: "Jun", value: 42000 },
  { name: "Jul", value: 90000 },
  { name: "Aug", value: 62000 },
  { name: "Sep", value: 30000 },
  { name: "Oct", value: 70000 },
];

const formatYAxis = (tick: number) => {
  return `${tick / 1000}k`; // Converts 100000 to "100k", etc.
};

const MyLineChart = () => {
  return (
    <LineChart width={500} height={300} data={dummyData}>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis tickFormatter={formatYAxis} />
      <Tooltip
        formatter={(value: number) => `${value.toLocaleString()} units`}
      />
      <Legend />
      <Line type="linear" dataKey="value" stroke="#C8E972" />
    </LineChart>
  );
};

export default MyLineChart;
