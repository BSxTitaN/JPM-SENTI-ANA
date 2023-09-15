"use client"

import { useState } from "react"

import { buttonVariants } from "@/components/ui/button"
import { InputFile } from "@/components/csv-upload"
import { DateRangePick } from "@/components/dateRange"
import { DropdownMenuDemo } from "@/components/dropdown"
import { MLRes } from "@/components/ml/res"

// Import useState

export default function IndexPage() {
  // Use useState to manage the dropChoice state
  const [dropChoice, setDropChoice] = useState("1 Hour")
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [file, setFile] = useState<File>()
  const [sentimentLabels, setSentimentLabels] = useState<number[]>([])

  const handleFileSubmit = async () => {
    if (!file) {
      // Handle the case where no file is selected
      return
    }

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch(
        "/predict",
        {
          method: "POST",
          body: formData,
        }
      )

      if (!response.ok) {
        throw new Error("Failed to fetch data from the API")
      }

      const data = await response.json()
      console.log(data)
      setSentimentLabels(data.sentiment_labels)
    } catch (error) {
      console.error("Error fetching data from the API:", error)
    }
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-full flex-col items-start gap-5 rounded-lg border-2 border-solid border-gray-500 p-6">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Modal Parameters
        </h1>

        <div className="mt-6 flex flex-col gap-4">
          <InputFile setFile={setFile} />

          <div className="flex gap-6">
            <DropdownMenuDemo
              dropChoice={dropChoice}
              setDropChoice={setDropChoice}
            />
            {dropChoice === "Custom" && (
              <DateRangePick
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                startDate={startDate}
                endDate={endDate}
              />
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleFileSubmit}
            rel="noreferrer"
            className={buttonVariants()}
          >
            Run Model
          </button>
        </div>
      </div>

      <div className="flex max-w-full flex-col items-start gap-5 rounded-lg border-2 border-solid border-gray-500 p-6">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Modal-Output
        </h1>

        <div className="mt-6 flex flex-col gap-4">
          <MLRes sentimentLabels={sentimentLabels} />
        </div>
      </div>

      {/* {showAdditionalContent && (
        <>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And Next.js 13 Ready.
          </p>
        </>
                    <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "outline" })}
            >
              Clear
            </Link>
      )} */}
    </section>
  )
}
