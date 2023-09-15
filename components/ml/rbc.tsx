import React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

interface BarChartProps {
  sentimentLabels: number[]
}

const COLORS = ["#FF5236", "#1FDB25", "#1C76F7"] // Colors for each sentiment

const sentimentLabelsMap: Record<number, string> = {
  0: "Negative",
  1: "Positive",
  2: "Neutral",
}

export function SentimentBarChart({ sentimentLabels }: BarChartProps) {
  // Calculate the count of each sentiment label
  const labelCounts = [0, 1, 2].map(
    (label) => sentimentLabels.filter((value) => value === label).length
  )

  const data = labelCounts.map((count, index) => ({
    sentiment: sentimentLabelsMap[index],
    count,
  }))

  return (
    <BarChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="sentiment" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill={COLORS[0]} name={sentimentLabelsMap[0]} />
      <Bar dataKey="count" fill={COLORS[1]} name={sentimentLabelsMap[1]} />
      <Bar dataKey="count" fill={COLORS[2]} name={sentimentLabelsMap[2]} />
    </BarChart>
  )
}
