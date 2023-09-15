import React from "react"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

interface LineChartProps {
  sentimentLabels: number[]
}

const COLORS = ["#FF5236", "#1FDB25", "#1C76F7"] // Colors for each sentiment

const sentimentLabelsMap: Record<number, string> = {
  0: "Negative",
  1: "Positive",
  2: "Neutral",
}

export function SentimentLineChart({ sentimentLabels }: LineChartProps) {
  // Map the numeric sentiment labels to corresponding labels and calculate counts
  const labeledSentimentData = Object.entries(sentimentLabelsMap).map(
    ([key, label]) => ({
      label,
      count: sentimentLabels.filter((value) => value === Number(key)).length,
    })
  )

  // Determine the maximum count to highlight the highest line
  const maxCount = Math.max(...labeledSentimentData.map((entry) => entry.count))

  return (
    <LineChart
      width={900}
      height={400}
      data={labeledSentimentData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Legend />
      {COLORS.map((color, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey="count"
          stroke={color}
          strokeWidth={2}
          dot={{ stroke: color, strokeWidth: 4, fill: "white" }}
          activeDot={{
            stroke: color,
            strokeWidth: 6,
            r: 8,
          }}
        />
      ))}
    </LineChart>
  )
}
