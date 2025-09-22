import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function StoreCategoryBreakdown({ storeName, data }) {
  // Filter to just the selected store
  const storeData = data.filter((row) => row.Store === storeName);

  // Group by category and sum quantities
  const categoryTotals = storeData.reduce((acc, row) => {
    acc[row.Category] = (acc[row.Category] || 0) + Number(row.Quantity);
    return acc;
  }, {});

  // Convert to recharts-friendly array
  const chartData = Object.entries(categoryTotals).map(
    ([category, quantity]) => ({
      category,
      quantity,
    }),
  );

  return (
    <div className="w-full">
      <h2 className="mb-2 font-semibold text-center">
        Category Sales for {storeName}
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity" fill="#8884d8" name="Units Sold" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
