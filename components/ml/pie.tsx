import React from "react"
import { Cell, Pie, PieChart, Tooltip } from "recharts"

interface PieChartProps {
  sentimentLabels: number[]
}

const COLORS = ["#FF5236", "#1FDB25", "#1C76F7"] // Colors for each sentiment

const sentimentLabelsMap: Record<number, string> = {
  0: "Negative",
  1: "Positive",
  2: "Neutral",
}

export function SentimentPieChart({ sentimentLabels }: PieChartProps) {
  // Map the numeric sentiment labels to corresponding labels
  const labeledSentimentData = Object.entries(sentimentLabelsMap).map(
    ([key, label]) => ({
      label,
      count: sentimentLabels.filter((value) => value === Number(key)).length,
    })
  )

  return (
    <PieChart width={300} height={300}>
      <Pie
        dataKey="count"
        data={labeledSentimentData}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {labeledSentimentData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  )
}
