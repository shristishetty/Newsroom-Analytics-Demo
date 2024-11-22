"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis,YAxis } from "recharts"

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
} from "../components/ui/chart"
const chartData = [
  { author: "Stephen", overperformance: 186 },
  { author: "Peter", overperformance: 305 },
  { author: "Nancy", overperformance: 237 },
  { author: "Bridger", overperformance: 73 },
  { author: "Steve", overperformance: 209 },
  { author: "Samuel", overperformance: 214 },
]

const chartConfig = {
  overperformance: {
    label: "Overperformance",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Overperformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Author Overperformance</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="author"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="overperformance" fill="var(--color-overperformance)" radius={8}>
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
          {/* Trending up by 5.2% this author <TrendingUp className="h-4 w-4" /> */}
        </div>
        <div className="leading-none text-muted-foreground">
          (summary)
        </div>
      </CardFooter>
    </Card>
  )
}


const post = [
    { author: "Alice", visitors: 275, fill: "var(--color-alice)" },
    { author: "Bob", visitors: 200, fill: "var(--color-bob)" },
    { author: "Charlie", visitors: 187, fill: "var(--color-charlie)" },
    { author: "David", visitors: 173, fill: "var(--color-david)" },
    { author: "Eve", visitors: 90, fill: "var(--color-eve)" },
  ];
  
  const postchart = {
    visitors: {
      label: "Visitors",
    },
    alice: {
      label: "Alice",
      color: "hsl(var(--chart-1))",
    },
    bob: {
      label: "Bob",
      color: "hsl(var(--chart-2))",
    },
    charlie: {
      label: "Charlie",
      color: "hsl(var(--chart-3))",
    },
    david: {
      label: "David",
      color: "hsl(var(--chart-4))",
    },
    eve: {
      label: "Eve",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;
  
  export function Post() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Numbers of Articles Posted By Authors</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={postchart}>
            <BarChart
              accessibilityLayer
              data={post}
              layout="vertical"
              margin={{
                left: 0,
              }}
            >
              <YAxis
                dataKey="author"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) =>
                  postchart[value.toLowerCase() as keyof typeof postchart]?.label
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
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" /> */}
          </div>
          <div className="leading-none text-muted-foreground">
            (summary)
          </div>
        </CardFooter>
      </Card>
    );
  }
  



const Authors = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Overperformance/>
        <Post/>
    </div>
    </>
  )
}

export default Authors