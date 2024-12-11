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

import dataJson from './data.json';
import { format } from "date-fns";

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Top
const chartData = [
  { browser: "politics", visitors: generateRandomNumber(1000, 5000), fill: "var(--color-politics)" },
  { browser: "art", visitors: generateRandomNumber(1000, 5000), fill: "var(--color-art)" },
  { browser: "environment", visitors: generateRandomNumber(1000, 5000), fill: "var(--color-environment)" },
  { browser: "health", visitors: generateRandomNumber(1000, 5000), fill: "var(--color-health)" },
  { browser: "housing", visitors: generateRandomNumber(1000, 5000), fill: "var(--color-housing)" },
];
const mostStory = Math.max(...chartData.map((item) => item.visitors));
const mostLabel = chartData.find((item) => item.visitors === mostStory)?.browser || "";

const leastStory = Math.min(...chartData.map((item) => item.visitors));
const leastLabel = chartData.find((item) => item.visitors === leastStory)?.browser || "";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  politics: {
    label: "Politics",
    color: "hsl(var(--chart-a1))",
  },
  arts: {
    label: "Art & Culture",
    color: "hsl(var(--chart-a2))",
  },
  environment: {
    label: "Environment",
    color: "hsl(var(--chart-a3))",
  },
  health: {
    label: "Health",
    color: "hsl(var(--chart-a4))",
  },
  housing: {
    label: "Housing",
    color: "hsl(var(--chart-a5))",
  },
  desktop: {
    label: "Visitors Per Story",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


const chart2Data = [
  { browser: "politics", visitors: generateRandomNumber(100, 500), fill: "var(--color-politics)" },
  { browser: "arts", visitors: generateRandomNumber(100, 500), fill: "var(--color-art)" },
  { browser: "environment", visitors: generateRandomNumber(100, 500), fill: "var(--color-environment)" },
  { browser: "health", visitors: generateRandomNumber(100, 500), fill: "var(--color-health)" },
  { browser: "housing", visitors: generateRandomNumber(100, 500), fill: "var(--color-housing)" },
];


export function PerAuthor() {
  // Find the max and min visitors and their corresponding browser labels
  const maxData = chart2Data.reduce((max, current) => {
    return current.visitors > max.visitors ? current : max;
  });
  const minData = chart2Data.reduce((min, current) => {
    return current.visitors < min.visitors ? current : min;
  });

  const mostLabel = maxData.browser;  // Browser with the most visitors
  const most = maxData.visitors;      // Maximum number of visitors
  const leastLabel = minData.browser; // Browser with the least visitors
  const least = minData.visitors;    // Minimum number of visitors

  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-bold">Personalized Content by Author</CardTitle>
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
      <CardFooter className="flex-col text-center gap-2 text-base">
        <div className="leading-none text-muted-foreground">
          {/* Showing total visitors for the last 6 months */}
        The plot shows that Author has posted the most content on {mostLabel}, with {most} posts, while the least on {leastLabel}, with only {least} posts. To improve content balance, efforts should focus on increasing Author's posts on {leastLabel} while maintaining strong contribution to {mostLabel}.
        </div>
      </CardFooter>
    </Card>
  );
}





const age = [
  { month: "18-24", housing: generateRandomNumber(50, 200), politics: generateRandomNumber(50, 150), government: generateRandomNumber(100, 300) },
  { month: "25-34", housing: generateRandomNumber(100, 300), politics: generateRandomNumber(100, 250), government: generateRandomNumber(200, 500) },
  { month: "35-44", housing: generateRandomNumber(100, 250), politics: generateRandomNumber(80, 200), government: generateRandomNumber(100, 400) },
  { month: "45-54", housing: generateRandomNumber(50, 150), politics: generateRandomNumber(100, 250), government: generateRandomNumber(150, 400) },
  { month: "55-64", housing: generateRandomNumber(100, 300), politics: generateRandomNumber(50, 200), government: generateRandomNumber(100, 350) },
  { month: "65+", housing: generateRandomNumber(100, 250), politics: generateRandomNumber(50, 200), government: generateRandomNumber(100, 300) },
];



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
        <CardTitle className="font-bold">Are Readers Staying Engaged?</CardTitle>
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
            <Bar dataKey="desktop" fill="hsl(var(--ring))" radius={8}>
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
      <CardFooter className="flex-col text-center gap-2 text-base">
        <div className="leading-none text-muted-foreground">
          Visitor Story Ratios
        </div>
      </CardFooter>
    </Card>
  )
}

type TagsProps = {
  selectedMonth?: Date;
};

const Tags : React.FC<TagsProps> = ({ selectedMonth }) =>{
  return (
      <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <PerAuthor />
              <VisitorStoryRatio />
          </div>
      </>
  );
};


export default Tags