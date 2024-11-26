"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis , PieChart, Pie, Label} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"
const graphchartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

export function EventCount() {
  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle>How Do Subscribers and Non-Subscribers Compare?</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={graphchartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export function SubscriberThemes() {
  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle>What Do Subscribers Want?</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={graphchartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="var(--color-desktop)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="var(--color-mobile)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

import * as React from "react"

  const piechartData = [
    { browser: "politics", visitors: 275, fill: "var(--color-politics)" },
    { browser: "art", visitors: 200, fill: "var(--color-art)" },
    { browser: "environment", visitors: 287, fill: "var(--color-environment)" },
    { browser: "health", visitors: 173, fill: "var(--color-health)" },
    { browser: "housing", visitors: 190, fill: "var(--color-housing)" },
  ]
  
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    politics: {
      label: "Politics",
      color: "hsl(var(--chart-1))",
    },
    art: {
      label: "Art & Culture",
      color: "hsl(var(--chart-2))",
    },
    environment: {
      label: "Environment",
      color: "hsl(var(--chart-3))",
    },
    health: {
      label: "Health",
      color: "hsl(var(--chart-4))",
    },
    housing: {
      label: "Housing",
      color: "hsl(var(--chart-5))",
    },
    desktop: {
      label: "Visitors Per Story",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig
  
  const chartData = [
    { browser: "politics", visitors: 275, fill: "var(--color-politics)" },
    { browser: "art", visitors: 200, fill: "var(--color-art)" },
    { browser: "environment", visitors: 287, fill: "var(--color-environment)" },
    { browser: "health", visitors: 173, fill: "var(--color-health)" },
    { browser: "housing", visitors: 190, fill: "var(--color-housing)" },
  ]

  export function RevenueAttribution() {
    const totalVisitors = React.useMemo(() => {
      return piechartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])
  
    return (
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Where Is the Revenue Coming From?</CardTitle>
          {/* <CardDescription>January - June 2024</CardDescription> */}
          <div className="flex justify-center items-center">
  {/* <DatePickerWithRange/> */}
  </div>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[300px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={80}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-text text-4xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Visitors
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" /> */}
          </div>
          <div className="leading-none text-muted-foreground">
            {/* Showing total visitors for the last 6 months */}
            (summary)
          </div>
        </CardFooter>
      </Card>
  )
}


const Revenue = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <EventCount/>
                <SubscriberThemes/>
                <RevenueAttribution/>
            </div>
        </>
    );
  };

  export default Revenue