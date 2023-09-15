"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"

interface ResProps {
  setFile: any// Updated prop to include sentimentLabels
}

export function InputFile({setFile}: ResProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Upload CSV-File</Label>
      <Input id="picture" type="file" onChange={(e) => setFile(e.target.files?.[0])} />
    </div>
  )
}