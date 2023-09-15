"use client"

import * as React from "react"
import styled from "styled-components"

import { SentimentLineChart } from "./ac"
import { SentimentPieChart } from "./pie"
// import { SentimentBarChart } from "./rbc";

import { ResTable } from "./table"

interface MLResProps {
  sentimentLabels: number[] // You can pass the sentiment labels from the parent component if available
}

export function MLRes({ sentimentLabels }: MLResProps) {
  return (
    <AIRes className="flex max-w-full flex-col gap-4">
      <p className="text-muted-foreground max-w-[700px] text-lg">
        The result of the inserted data is given below:
      </p>

      <ResTable sentimentLabels={sentimentLabels} />

      <p className="text-muted-foreground mt-4 max-w-[700px] text-lg">
        The Graphical Representation:
      </p>

      <div className="flex max-w-full flex-wrap gap-4">
        <div className="gCard">
          <SentimentPieChart sentimentLabels={sentimentLabels} />
        </div>
        <div className="gCard">
          <SentimentPieChart sentimentLabels={sentimentLabels} />
        </div>
        <div className="gCard">
          <SentimentLineChart sentimentLabels={sentimentLabels} />
        </div>
      </div>

      {/* Render the graphical representation here based on sentimentLabels */}
    </AIRes>
  )
}

const AIRes = styled.div`
  .gCard {
    padding: 2rem;
    border: 0.8px solid #d5dee7;
    border-radius: 20px;
  }

  .gCard:nth-child(1) {
    width: max-content;
  }

  .gCard:nth-child(2) {
    width: max-content;
  }

  .gCard:nth-child(3) {
    width: 100%;
  }
`
