"use client"

import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function OffPlatform() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center">
        <CardTitle className="text-lg font-bold">On-and-Off Platform Analysis</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardFooter className="flex-col gap-2 text-base">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export function PredictClick() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center">
        <CardTitle className="text-lg font-bold">Predictive Click Model</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardFooter className="flex-col gap-2 text-base">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month
        </div>
        <div className="leading-none text-muted-foreground">
        Leverage advanced algorithms to predict the likelihood of users clicking on specific content. By analyzing interest, recency, topic similarity, and trendiness, this feature enables data-driven decisions to optimize content strategy, enhance engagement, and recommend relevant new topics effectively.
        </div>
      </CardFooter>
    </Card>
  )
}

export function Sentiment() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center">
        <CardTitle className="text-lg font-bold">Advanced Theme and Sentiment Insights Linked to Revenue</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardFooter className="flex-col gap-2 text-base">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export function Anomaly() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center">
        <CardTitle className="text-lg font-bold">Anomaly detection for Events</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardFooter className="flex-col gap-2 text-base">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}


const Features = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 m-5">
                <OffPlatform/>
                <PredictClick/>
                <Sentiment />
                <Anomaly />
            </div>
        </>
    );
  };

export default Features