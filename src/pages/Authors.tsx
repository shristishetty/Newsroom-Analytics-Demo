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

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Overperformance
const generateRandomChartData = () => {
  const authors = ["Stephen", "Peter", "Nancy", "Bridger", "Steve", "Samuel"];
  return authors.map((author) => ({
    author,
    overperformance: generateRandomNumber(50, 400), // Random overperformance between 50 and 400
  }));
};

const chartData = generateRandomChartData();

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


const generateRandomPostData = () => {
  const authors = ["Alice", "Bob", "Charlie", "David", "Eve"];
  return authors.map((author) => ({
    author,
    visitors: generateRandomNumber(50, 300), // Random visitors between 50 and 300
    fill: `var(--color-${author.toLowerCase()})`, // Use author's name as the color variable
  }));
};

// Post chart data with random values
const post = generateRandomPostData();
  
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