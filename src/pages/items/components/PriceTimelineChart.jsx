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

/**
 * PriceTimelineChart
 * Displays price changes of a single menu item over time
 *
 * Props:
 *  - storeName : string → e.g. "Store A"
 *  - itemName  : string → e.g. "Pasta"
 *  - data      : array  → [{ date: "YYYY-MM-DD", avgPrice: number }, ...]
 *  - color?    : string → optional line color (default #8884d8)
 *  - height?   : number → chart height (default 250)
 */
export default function PriceTimelineChart({
  itemName,
  data,
  color = "#8884d8",
  height = 150,
}) {
  return (
    <div className="w-full">
      <h3 className="mb-2 text-lg font-semibold text-center">{itemName}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(d) => {
              const dt = new Date(d);
              return `${dt.getMonth() + 1}/${dt.getDate()}/${String(dt.getFullYear()).slice(-2)}`;
            }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            label={{
              value: "Price",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip
            labelFormatter={(d) =>
              new Date(d).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            }
            formatter={(value) => [`$${value.toFixed(2)}`, "Avg Price"]}
          />
          <Line
            type="monotone"
            dataKey="avgPrice"
            stroke={color}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
