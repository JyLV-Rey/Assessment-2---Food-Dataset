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

export default function RankStoresByProfit({ data }) {
  const storeStats = data.reduce((acc, row) => {
    acc[row.Store] = (acc[row.Store] || 0) + Number(row.Total);
    return acc;
  }, {});

  const chartData = Object.entries(storeStats)
    .map(([store, profit]) => ({ store, profit }))
    .sort((a, b) => b.profit - a.profit); // descending

  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="store" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="profit" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
}
