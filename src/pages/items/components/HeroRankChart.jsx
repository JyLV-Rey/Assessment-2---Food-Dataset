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

/**
 * HeroRankChart
 * A generic bar chart for ranking hero stats (items, categories, etc.)
 *
 * Props:
 *  - title:      string   → heading text
 *  - data:       array    → [{ name: string, value: number }, ...]
 *  - dataKey:    string   → key in `data` for bar height (e.g. "quantity", "price")
 *  - color?:     string   → optional bar color (default #8884d8)
 *  - height?:    number   → chart height in px (default 300)
 */
export default function HeroRankChart({
  title,
  data,
  dataKey,
  color = "#8884d8",
  height = 300,
}) {
  return (
    <div className="w-full">
      <h2 className="mb-4 text-2xl font-bold text-center">{title}</h2>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: -10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0}
            angle={-20}
            textAnchor="end"
            height={60}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey={dataKey} fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
