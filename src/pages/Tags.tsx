"use client"

import * as React from "react"
// import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, LabelList } from "recharts"

"use client"

import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Calendar } from "../components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover"

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 1),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}


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
const chartData = [
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
            data={chartData}
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
  { month: "18-24", housing: 186, politics: 80 },
  { month: "25-34", housing: 305, politics: 200,government:435 },
  { month: "35-44", housing: 237, politics: 120, government:374 },
  { month: "45-54", housing: 73, politics: 190, government:265 },
  { month: "55-64", housing: 209, politics: 130, government: 233 },
  { month: "65+", housing: 214, politics: 140 },
]

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
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

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