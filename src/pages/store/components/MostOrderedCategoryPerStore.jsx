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

export default function MostOrderedCategoryPerStore({ storeName, data }) {
  const categoryStats = data
    .filter((row) => row.Store === storeName)
    .reduce((acc, row) => {
      acc[row.Category] = (acc[row.Category] || 0) + Number(row.Quantity);
      return acc;
    }, {});

  const chartData = Object.entries(categoryStats).map(([category, qty]) => ({
    category,
    quantity: qty,
  }));

  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart
        data={chartData}
        margin={{ top: 10, right: 30, left: -30, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="quantity" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
