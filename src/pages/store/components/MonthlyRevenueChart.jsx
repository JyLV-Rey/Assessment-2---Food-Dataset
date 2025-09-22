import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyRevenueChart({
  storeName,
  data,
  color = "#4CAF50",
  height = 250,
}) {
  return (
    <div className="w-full">
      <h3 className="mb-2 text-lg font-semibold text-center">
        {storeName} Monthly Revenue
      </h3>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickFormatter={(m) => {
              const [y, mo] = m.split("-");
              return `${mo}/${y.slice(-2)}`; // → "6/23"
            }}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            label={{ value: "Revenue", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            labelFormatter={(m) => {
              const [y, mo] = m.split("-");
              return `${mo}/${y}`;
            }}
            formatter={(v) => [`$${v.toFixed(2)}`, "Revenue"]}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={color}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
