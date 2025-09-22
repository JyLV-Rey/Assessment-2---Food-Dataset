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

export default function MostOrderedDishesPerStore({ storeName, data }) {
  const dishStats = data
    .filter((row) => row.Store === storeName)
    .reduce((acc, row) => {
      acc[row.MenuItem] = (acc[row.MenuItem] || 0) + Number(row.Quantity);
      return acc;
    }, {});

  const chartData = Object.entries(dishStats)
    .map(([dish, qty]) => ({ dish, quantity: qty }))
    .sort((a, b) => b.quantity - a.quantity) // rank by quantity
    .slice(0, 5); // top 5

  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart
        data={chartData}
        margin={{ top: 10, right: 30, left: -30, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dish" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="quantity" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
