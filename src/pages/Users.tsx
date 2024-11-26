"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis,Bar, BarChart, LabelList, Pie, PieChart, Line, LineChart ,Label } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "../components/ui/chart"


const chartData = [
    { month: "January", "18-24": 115, "25-34": 145, "35-44": 90, "45-54": 55, "55-64": 35, "65+": 25 },
    { month: "February", "18-24": 130, "25-34": 160, "35-44": 120, "45-54": 65, "55-64": 40, "65+": 30 },
    { month: "March", "18-24": 105, "25-34": 180, "35-44": 110, "45-54": 70, "55-64": 45, "65+": 35 },
    { month: "April", "18-24": 160, "25-34": 130, "35-44": 95, "45-54": 85, "55-64": 55, "65+": 45 },
    { month: "May", "18-24": 140, "25-34": 200, "35-44": 120, "45-54": 100, "55-64": 50, "65+": 40 },
    { month: "June", "18-24": 125, "25-34": 165, "35-44": 115, "45-54": 95, "55-64": 60, "65+": 50 },
    { month: "July", "18-24": 170, "25-34": 150, "35-44": 130, "45-54": 75, "55-64": 45, "65+": 35 },
    { month: "August", "18-24": 145, "25-34": 180, "35-44": 105, "45-54": 85, "55-64": 55, "65+": 40 },
    { month: "September", "18-24": 160, "25-34": 175, "35-44": 125, "45-54": 95, "55-64": 50, "65+": 45 },
    { month: "October", "18-24": 135, "25-34": 150, "35-44": 140, "45-54": 70, "55-64": 55, "65+": 30 },
    { month: "November", "18-24": 155, "25-34": 190, "35-44": 100, "45-54": 90, "55-64": 60, "65+": 45 },
    { month: "December", "18-24": 180, "25-34": 210, "35-44": 130, "45-54": 85, "55-64": 40, "65+": 50 },
  ];
  
  

const chartConfig = {
  "18-24": {
    label: "18-24",
    color: "hsl(var(--chart-1))",
  },
  "25-34": {
    label: "25-34",
    color: "hsl(var(--chart-2))",
  },
  "35-44": {
    label: "35-44",
    color: "hsl(var(--chart-3))",
  },
  "45-54": {
    label: "45-54",
    color: "hsl(var(--chart-4))",
  },
  "55-64": {
    label: "55-64",
    color: "hsl(var(--chart-5))",
  },
  "65+": {
    label: "65+",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig;

export function EngagedSession() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Engaged Sessions</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fill18-24" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-18-24)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-18-24)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fill25-34" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-25-34)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-25-34)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fill35-44" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-35-44)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-35-44)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fill45-54" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-45-54)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-45-54)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fill55-64" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-55-64)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-55-64)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fill65+" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-65+)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-65+)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="18-24"
              type="natural"
              fill="url(#fill18-24)"
              fillOpacity={0.4}
              stroke="var(--color-18-24)"
              stackId="a"
            />
            <Area
              dataKey="25-34"
              type="natural"
              fill="url(#fill25-34)"
              fillOpacity={0.4}
              stroke="var(--color-25-34)"
              stackId="a"
            />
            <Area
              dataKey="35-44"
              type="natural"
              fill="url(#fill35-44)"
              fillOpacity={0.4}
              stroke="var(--color-35-44)"
              stackId="a"
            />
            <Area
              dataKey="45-54"
              type="natural"
              fill="url(#fill45-54)"
              fillOpacity={0.4}
              stroke="var(--color-45-54)"
              stackId="a"
            />
            <Area
              dataKey="55-64"
              type="natural"
              fill="url(#fill55-64)"
              fillOpacity={0.4}
              stroke="var(--color-55-64)"
              stackId="a"
            />
            <Area
              dataKey="65+"
              type="natural"
              fill="url(#fill65+)"
              fillOpacity={0.4}
              stroke="var(--color-65+)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" /> */}
              (summary)
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {/* January - December 2024 */}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}


const retData = [
  { age: "18-24", desktop: 45 },
  { age: "25-34", desktop: 58 },
  { age: "35-44", desktop: 74 },
  { age: "45-54", desktop: 64 },
  { age: "55-64", desktop: 88 },
  { age: "65+", desktop: 68 },
]

const ret = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Retention() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Retention Percentage Per Age Group</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={ret}>
          <BarChart
            accessibilityLayer
            data={retData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="age"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
           */}
           (summary)
        </div>
        <div className="leading-none text-muted-foreground">
          {/* Showing total visitors for the last 6 months */}
        </div>
      </CardFooter>
    </Card>
  )
}

const srcData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const srcConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Source() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Where Does Our Audience Come From?</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={srcConfig}>
          <LineChart
            accessibilityLayer
            data={srcData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Summary
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}


const box1Data = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

const box1Config = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Box1() {
  const totalVisitors = React.useMemo(() => {
    return box1Data.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={box1Config}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={box1Data}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
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
                          className="text-3xl text-text font-bold"
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
        <div className="flex items-center text-text gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        
      </CardFooter>
    </Card>
  )
}


export function Box() {
  return (
    <>
    <div className="bg-back border-[1px] border-white rounded-[6px] p-5 font-semibold">Who Are Our Readers?

    <div className="w-1/2 grid grid-cols-2 gap-4">
    <Box1/>
    {/* <div className="bg-back border-[1px] border-white rounded-[6px] p-5 font-semibold">User</div>
    <div className="bg-back border-[1px] border-white rounded-[6px] p-5 font-semibold">User</div>
    <div className="bg-back border-[1px] border-white rounded-[6px] p-5 font-semibold">User</div> */}
    </div>
    </div>
    
    </>
  )}

const Users = () => {
  return (
    <>
    <div className="flex">
  <div className="w-1/2 p-2">
    <Source />
  </div>
  <div className="w-1/2 p-2">
    <Box/>
  </div>
</div>
    {/* <EngagedSession/>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
        
        <Retention/>
    </div> */}

    </>
  )
}

export default Users