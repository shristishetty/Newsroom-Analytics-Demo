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


const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Engaged Session
const generateRandomChartData = () => {
  const months = [
    "January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"
  ];

  return months.map((month) => ({
    month,
    "18-24": generateRandomNumber(30, 200),
    "25-34": generateRandomNumber(50, 250),
    "35-44": generateRandomNumber(40, 150),
    "45-54": generateRandomNumber(30, 120),
    "55-64": generateRandomNumber(20, 100),
    "65+": generateRandomNumber(10, 70),
  }));
};
const chartData =generateRandomChartData();
  

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

// Retention Data
const generateRandomRetentionData = () => {
  const ageGroups = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"];
  return ageGroups.map((age) => ({
    age,
    desktop: generateRandomNumber(40, 90),
  }));
};

const retData = generateRandomRetentionData();

const ret = {
  desktop: {
    label: "Retention",
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

// Traffic
const generateRandomSourceData = () => {
  const months = [
    "Instagram", "Facebook", "Google", "X", "Reddit", "Bluesky"
  ];

  return months.map((month) => ({
    month,
    desktop: generateRandomNumber(50, 300),
    mobile: generateRandomNumber(50, 250),
  }));
};

const srcData = generateRandomSourceData();


const srcConfig = {
  desktop: {
    label: "Traffic",
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

// Active Users
const generateRandomBoxData = () => {
  const boxData = [
    { age: "1", fill: "var(--color-1)" },
    { age: "2", fill: "var(--color-2)" },
    { age: "3", fill: "var(--color-3)" },
    { age: "4", fill: "var(--color-4)" },
    { age: "5", fill: "var(--color-5)" },
  ];

  // Update visitors with random numbers for each item
  return boxData.map((item) => ({
    ...item,
    visitors: generateRandomNumber(1000, 300), // Generate random visitors count
  }));
};

// Generate the random box data
const box1Data = generateRandomBoxData();

const box1Config = {
  visitors: {
    label: "Visitors",
  },
  "1": {
    label: "18-24",
    color: "hsl(var(--chart-1))",
  },
  "2": {
    label: "25-34",
    color: "hsl(var(--chart-2))",
  },
  "3": {
    label: "35-44",
    color: "hsl(var(--chart-3))",
  },
  "4": {
    label: "45-54",
    color: "hsl(var(--chart-4))",
  },
  "5": {
    label: "55-64",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Box1() {
  const totalVisitors = React.useMemo(() => {
    return box1Data.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Active Users</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={box1Config}
          className="mx-auto aspect-square"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={box1Data}
              dataKey="visitors"
              nameKey="age"
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
                          className="fill-white text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-text"
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
        <div className="flex items-center  gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        
      </CardFooter>
    </Card>
  )
}





const generateRandomBox2Data = () => {
  const box2Data = [
    { age: "1", fill: "var(--color-1)" },
    { age: "2", fill: "var(--color-2)" },
    { age: "3", fill: "var(--color-3)" },
    { age: "4", fill: "var(--color-4)" },
    { age: "5", fill: "var(--color-5)" },
  ];

  // Update visitors with random numbers for each item
  return box2Data.map((item) => ({
    ...item,
    visitors: generateRandomNumber(50, 100), // Generate random visitors count
  }));
};

// Generate the random box data
const box2Data = generateRandomBox2Data();
const box2Config = {
  visitors: {
    label: "Visitors",
  },
  "1": {
    label: "18-24",
    color: "hsl(var(--chart-1))",
  },
  "2": {
    label: "25-34",
    color: "hsl(var(--chart-2))",
  },
  "3": {
    label: "35-44",
    color: "hsl(var(--chart-3))",
  },
  "4": {
    label: "45-54",
    color: "hsl(var(--chart-4))",
  },
  "5": {
    label: "55-64",
    color: "hsl(var(--chart-5))",
  },
  
} satisfies ChartConfig

export function Box2() {
  const totalVisitors = React.useMemo(() => {
    return box2Data.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>New Users</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={box2Config}
          className="mx-auto aspect-square"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={box2Data}
              dataKey="visitors"
              nameKey="age"
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
                          className="fill-white text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-text"
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
        <div className="flex items-center  gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        
      </CardFooter>
    </Card>
  )
}

export function Box() {
  return (
    <>
    <div className="bg-back border-[1px] border-white rounded-[6px] p-5 h-full font-semibold">Who Are Our Readers?

    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <Box1/>
    <Box2/>
    </div>
    <p className="pt-5 pb-5">
      (Summary) 
      lsk;j
    </p>
    </div>
    
    </>
  )}

  const Users = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Source />
                <Box />
                <Retention />
                <EngagedSession />
            </div>
        </>
    );
  };

export default Users


    

  {/* <Calendar
  mode="range" // Enable range mode
  selected={selectedRange}  // Pass the selected range
  onSelect={handleRangeSelect}  // Update the selected range
  className="rounded-md border"
  /> */}