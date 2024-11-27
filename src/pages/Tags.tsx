"use client"

import * as React from "react"
// import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, LabelList } from "recharts"

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
  ChartLegendContent
} from "../components/ui/chart"

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Top
const chartData = [
  { browser: "politics", visitors: generateRandomNumber(100, 500), fill: "var(--color-politics)" },
  { browser: "art", visitors: generateRandomNumber(100, 500), fill: "var(--color-art)" },
  { browser: "environment", visitors: generateRandomNumber(100, 500), fill: "var(--color-environment)" },
  { browser: "health", visitors: generateRandomNumber(100, 500), fill: "var(--color-health)" },
  { browser: "housing", visitors: generateRandomNumber(100, 500), fill: "var(--color-housing)" },
];

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
} satisfies ChartConfig

export function Top() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>What Stories Are Capturing Attention?</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
        <div className="flex justify-center items-center">
{/* <DatePickerWithRange/> */}
</div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px]"
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

const chart2Data = [
  { browser: "politics", visitors: generateRandomNumber(100, 500), fill: "var(--color-politics)" },
  { browser: "art", visitors: generateRandomNumber(100, 500), fill: "var(--color-art)" },
  { browser: "environment", visitors: generateRandomNumber(100, 500), fill: "var(--color-environment)" },
  { browser: "health", visitors: generateRandomNumber(100, 500), fill: "var(--color-health)" },
  { browser: "housing", visitors: generateRandomNumber(100, 500), fill: "var(--color-housing)" },
];


export function PerAuthor() {
  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle>Personalized Content by Author</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
        <div className="flex justify-center items-center">
{/* <DatePickerWithRange/> */}
</div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chart2Data}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" /> */}
(summary)        </div>
        <div className="leading-none text-muted-foreground">
          {/* Showing total visitors for the last 6 months */}
        </div>
      </CardFooter>
    </Card>
  )
}




const age = [
  { month: "18-24", housing: generateRandomNumber(50, 200), politics: generateRandomNumber(50, 150), government: generateRandomNumber(100, 300) },
  { month: "25-34", housing: generateRandomNumber(100, 300), politics: generateRandomNumber(100, 250), government: generateRandomNumber(200, 500) },
  { month: "35-44", housing: generateRandomNumber(100, 250), politics: generateRandomNumber(80, 200), government: generateRandomNumber(100, 400) },
  { month: "45-54", housing: generateRandomNumber(50, 150), politics: generateRandomNumber(100, 250), government: generateRandomNumber(150, 400) },
  { month: "55-64", housing: generateRandomNumber(100, 300), politics: generateRandomNumber(50, 200), government: generateRandomNumber(100, 350) },
  { month: "65+", housing: generateRandomNumber(100, 250), politics: generateRandomNumber(50, 200), government: generateRandomNumber(100, 300) },
];


const charConfig = {
  housing: {
    label: "Housing",
    color: "hsl(var(--chart-1))",
  },
  politics: {
    label: "Politics",
    color: "hsl(var(--chart-2))",
  },
  government: {
    label: "Government",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function AgeGroup() {
  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle>Reaching Every Age Group</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
        <div className="flex justify-center items-center">
{/* <DatePickerWithRange/> */}
</div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={charConfig}>
          <BarChart accessibilityLayer data={age}>
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
              dataKey="housing"
              stackId="a"
              fill="var(--color-housing)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="politics"
              stackId="a"
              fill="var(--color-politics)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="government"
              stackId="a"
              fill="var(--color-government)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" /> */}
          (summary)
        </div>
        <div className="leading-none text-muted-foreground">
          {/* Showing total visitors for the last 6 months */}
        </div>
      </CardFooter>
    </Card>
  )
}

const visitorChartData = [
  { month: "January", desktop: generateRandomNumber(50, 300) },
  { month: "February", desktop: generateRandomNumber(50, 300) },
  { month: "March", desktop: generateRandomNumber(50, 300) },
  { month: "April", desktop: generateRandomNumber(50, 300) },
  { month: "May", desktop: generateRandomNumber(50, 300) },
  { month: "June", desktop: generateRandomNumber(50, 300) },
];


export function VisitorStoryRatio() {
  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle>Are Readers Staying Engaged?</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={visitorChartData}
            margin={{
              top: 20,
            }}
          >
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
          Trending up by 5.2% this month
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}


const Tags = () => {
  return (
      <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Top />
              <AgeGroup />
              <PerAuthor />
              <VisitorStoryRatio />
          </div>
      </>
  );
};


export default Tags