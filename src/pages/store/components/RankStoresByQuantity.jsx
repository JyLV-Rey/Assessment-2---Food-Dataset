import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function RankStoresByQuantity({ data }) {
  const storeStats = data.reduce((acc, row) => {
    acc[row.Store] = (acc[row.Store] || 0) + Number(row.Quantity);
    return acc;
  }, {});

  const chartData = Object.entries(storeStats)
    .map(([store, quantity]) => ({ store, quantity }))
    .sort((a, b) => b.quantity - a.quantity); // descending

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="store" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="quantity" fill="#d84c4c" />
      </BarChart>
    </ResponsiveContainer>
  );
}
