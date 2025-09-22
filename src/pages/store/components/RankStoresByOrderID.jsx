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

export default function RankStoresByOrderID({ data }) {
  // Count unique OrderID per store
  const storeStats = data.reduce((acc, row) => {
    const store = row.Store;
    const orderId = row.OrderID;

    if (!acc[store]) acc[store] = new Set();
    acc[store].add(orderId);
    return acc;
  }, {});

  // Convert to array & sort descending
  const chartData = Object.entries(storeStats)
    .map(([store, orderSet]) => ({ store, orders: orderSet.size }))
    .sort((a, b) => b.orders - a.orders);

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
        <Bar dataKey="orders" fill="#8884d8" name="Total Orders" />
      </BarChart>
    </ResponsiveContainer>
  );
}
