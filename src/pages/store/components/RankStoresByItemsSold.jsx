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

export default function RankStoresByItemsSold({ data }) {
  // Sum the Quantity per store
  const storeStats = data.reduce((acc, row) => {
    acc[row.Store] = (acc[row.Store] || 0) + Number(row.Quantity);
    return acc;
  }, {});

  // Convert to array & sort descending
  const chartData = Object.entries(storeStats)
    .map(([store, itemsSold]) => ({ store, itemsSold }))
    .sort((a, b) => b.itemsSold - a.itemsSold);

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
        <Bar dataKey="itemsSold" fill="#F735B3" name="Items Sold" />
      </BarChart>
    </ResponsiveContainer>
  );
}
