"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface DropdownMenuDemoProps {
  dropChoice: string,
  setDropChoice: any,
}

export function DropdownMenuDemo({ dropChoice, setDropChoice }: DropdownMenuDemoProps) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{dropChoice}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Period Selection</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={dropChoice} onValueChange={setDropChoice}>
          <DropdownMenuRadioItem value="1 Hour">1 Hour</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="1 Day">1 Day</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="1 Week">1 Week</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="1 Month">1 Month</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="1 Year">1 Week</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Custom">Custom</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}