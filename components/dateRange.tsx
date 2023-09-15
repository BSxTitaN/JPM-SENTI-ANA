"use client"

import * as React from "react"
import { DatePickerDemo } from "./datepick"

interface dateRangeProps {
  setStartDate: any
  setEndDate: any
  startDate: Date | undefined
  endDate: Date | undefined
}

export function DateRangePick({
  setStartDate,
  setEndDate,
  startDate,
  endDate
}: dateRangeProps) {
  return (
    <div className="flex items-center justify-items-center gap-4">
        <DatePickerDemo date={startDate} setDate={setStartDate} />
        <p> - </p>
        <DatePickerDemo date={endDate} setDate={setEndDate} />
    </div>
  )
}
