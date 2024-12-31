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
    <LineChart width={761} height={449} data={dummyData}>
      <CartesianGrid stroke="#343434" strokeDasharray="2 2" />
      <XAxis dataKey="name" tick={{ fill: "white" }} />
      <YAxis tickFormatter={formatYAxis} tick={{ fill: "white" }} />
      <Tooltip
        formatter={(value: number) => `$${value.toLocaleString()} dollars`}
        contentStyle={{
          color: "black",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          border: "1px solid #B3E237",
        }}
      />
      <Legend />
      <Line type="linear" dataKey="value" stroke="#C8E972" />
    </LineChart>
  );
};

export default MyLineChart;
