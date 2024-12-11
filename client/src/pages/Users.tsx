"use client"

import * as React from "react"
import { useEffect, useState } from "react";

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis,Bar, BarChart, LabelList, Pie, PieChart, Line, LineChart ,Label, PolarAngleAxis, PolarGrid, Radar, RadarChart, Rectangle  } from "recharts"

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

import retenData from "../data/retention.json"

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
const charData =generateRandomChartData();
  

const charConfig = {
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
  
} satisfies ChartConfig;

// Retention Data


type AgeGroup = "18-24" | "25-34" | "35-44" | "45-54" | "55-64" ;

type TotalSessions = {
  [key in AgeGroup]: number;
};
export function EngagedSession() {
  // Calculate total sessions for each age group
  const totalSessions: TotalSessions = charData.reduce((totals, data) => {
    Object.keys(data).forEach((key) => {
      if (key !== "month") {
        // TypeScript now knows that key is one of the valid AgeGroup keys
        const ageGroupKey = key as AgeGroup; // Cast to AgeGroup
        totals[ageGroupKey] = (totals[ageGroupKey] || 0) + data[ageGroupKey];
      }
    });
    return totals;
  }, {} as TotalSessions);

  // Find the age group with the most and least sessions
  const mostLabel = Object.keys(totalSessions).reduce((maxLabel, currentKey) => {
    return totalSessions[currentKey as AgeGroup] > totalSessions[maxLabel as AgeGroup]
      ? currentKey
      : maxLabel;
  }, "18-24");

  const leastLabel = Object.keys(totalSessions).reduce((minLabel, currentKey) => {
    return totalSessions[currentKey as AgeGroup] < totalSessions[minLabel as AgeGroup]
      ? currentKey
      : minLabel;
  }, "18-24");

  const most = totalSessions[mostLabel as AgeGroup];
  const least = totalSessions[leastLabel as AgeGroup];

  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle>Engaged Sessions</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={charConfig}>
          <AreaChart
            accessibilityLayer
            data={charData}
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
         
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full text-center gap-2 text-base">
          <div className="grid gap-2">
            <div className="leading-none text-muted-foreground">
              Engaged sessions show {most} sessions per month for the {mostLabel} age group, compared to {least} sessions per month for the {leastLabel} group. To enhance overall engagement, prioritize increasing session frequency in the lower-performing segment while continuing to nurture high levels of activity in the more engaged group.
              {/* January - December 2024 */}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}



const reteData = [
  { browser: "1", visitors: generateRandomNumber(40, 90), fill: "var(--color-1)" },
  { browser: "2", visitors: generateRandomNumber(40, 90), fill: "var(--color-2)" },
  { browser: "3", visitors: generateRandomNumber(40, 90), fill: "var(--color-3)" },
  { browser: "4", visitors: generateRandomNumber(40, 90), fill: "var(--color-4)" },
  { browser: "5", visitors: generateRandomNumber(40, 90), fill: "var(--color-5)" },
]


// Define the structure of the data item, including the 'visitors' field
interface RetentionDataItem {
  browser: string;
  months: {
    [month: string]: number; // A dynamic key for months with number values
  };
  fill: string;
  visitors: number; // Add the visitors field here to store calculated retention
}

// Define the type for selectedDateRange
type DateRange = [string, string]; // Assuming the date range is an array of two month names

// Define the type for the Retention component props
interface RetentionProps {
  selectedDateRange: DateRange;
}

const retData: RetentionDataItem[] = retenData.data.map((item) => {
  // Calculate the average retention based on the months data
  const averageRetention = (Object.values(item.months).reduce((sum, value) => sum + value, 0)) / 3;

  // Return the item with an added 'visitors' property (average retention)
  return {
    ...item,
    visitors: averageRetention, // Add 'visitors' to the object
  };
});

const reteConfig = {
  visitors: {
    label: "Retention",
  },
  1: {
    label: "18-24",
    color: "hsl(var(--chart-1))",
  },
  2: {
    label: "25-34",
    color: "hsl(var(--chart-2))",
  },
  3: {
    label: "35-44",
    color: "hsl(var(--chart-3))",
  },
  4: {
    label: "45-54",
    color: "hsl(var(--chart-4))",
  },
  5: {
    label: "55-64",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Retention({ selectedDateRange }: RetentionProps) {
  const [filteredData, setFilteredData] = useState(retData);

  // Update filtered data when selectedDateRange changes
  useEffect(() => {
    const [startMonth, endMonth] = selectedDateRange; // Assuming selectedDateRange is an array with start and end month names (e.g., ["January", "March"])

    // Filter data based on whether the months fall within the selected range
    const filtered = retData.filter((item) => {
      // Check if the months in the selected range exist in the item.months object
      const monthsInRange = Object.keys(item.months).some((month) => {
        const monthIndex = new Date(`${month} 1`).getMonth(); // Convert month name to month index
        const startIndex = new Date(`${startMonth} 1`).getMonth(); // Convert start month to index
        const endIndex = new Date(`${endMonth} 1`).getMonth(); // Convert end month to index
        return monthIndex >= startIndex && monthIndex <= endIndex;
      });
      return monthsInRange;
    });

    setFilteredData(filtered);
  }, [selectedDateRange]);

  const mostRetention = Math.max(...filteredData.map((item) => item.visitors));
  const leastRetention = Math.min(...filteredData.map((item) => item.visitors));

  // Find the corresponding browser label for the most and least retention values
  const mostLabel = filteredData.find((item) => item.visitors === mostRetention)?.browser || "";
  const leastLabel = filteredData.find((item) => item.visitors === leastRetention)?.browser || "";

  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle>Retention Percentage Per Age Group</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={reteConfig}>
          <BarChart accessibilityLayer data={filteredData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                reteConfig[value as keyof typeof reteConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="visitors"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col text-center gap-2 text-base">
        
        <div className="leading-none text-muted-foreground">
          Retention rates show {mostRetention}% for the {mostLabel} browser, compared to {leastRetention}% for the {leastLabel} browser. To improve overall retention, focus on boosting engagement in the lower-performing segment while maintaining strong connections with the higher-performing group.
        </div>
      </CardFooter>
    </Card>
  );
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
const sortedDataByDesktop = [...srcData].sort((a, b) => b.desktop - a.desktop);
const first = sortedDataByDesktop[0].month;
const second = sortedDataByDesktop[1].month;

const least = sortedDataByDesktop[sortedDataByDesktop.length - 1].month;
const least2 = sortedDataByDesktop[sortedDataByDesktop.length - 2].month;

const srcConfig = {
  desktop: {
    label: "Traffic",
    color: "hsl(var(--chart-1))",
  },

} satisfies ChartConfig;


export function Source() {
  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle>Where Does Our Audience Come From?</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-1">
        <ChartContainer
          config={srcConfig}
          className="mx-auto max-h-[300px]"
        >
          <RadarChart data={srcData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col text-center gap-2 text-base">
        <div className="leading-none text-muted-foreground">
        Visitor traffic peaks on {first} and {second}, while {least} and {least2} show lower engagement. <br/>Focus on strengthening successful channels and optimizing underperforming ones.
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

interface Box1Props {
  onTotalVisitors: (visitors: number) => void;
}
export function Box1({ onTotalVisitors }:Box1Props) {
  const totalVisitors = React.useMemo(() => {
    return box1Data.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])
  React.useEffect(() => {
    onTotalVisitors(totalVisitors);
  }, [totalVisitors, onTotalVisitors]);

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

interface Box2Props {
  onTotalVisitors: (visitors: number) => void;
}
export function Box2({ onTotalVisitors }:Box2Props) {
  const totalVisitors = React.useMemo(() => {
    return box2Data.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])
  React.useEffect(() => {
    onTotalVisitors(totalVisitors);
  }, [totalVisitors, onTotalVisitors]);


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
    </Card>
  )
}

export function Box() {
  const [activeVisitors, setActiveVisitors] = React.useState(0);
  const [newVisitors, setNewVisitors] = React.useState(0);
  return (
    <>
    <div className="text-center bg-back border-[1px] border-white rounded-[6px] p-5 h-full">Who Are Our Readers?

    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <Box1 onTotalVisitors={setActiveVisitors}/>
    <Box2 onTotalVisitors={setNewVisitors}/>
    </div>
    <CardFooter className="pt-5 flex-col text-center gap-2 text-base">
          <div className="leading-none text-muted-foreground">
    With {activeVisitors.toLocaleString()} active users and {newVisitors.toLocaleString()} new visitors, now is the time to strengthen engagement and convert these visitors into long-term supporters. Focus on building lasting connections to drive sustained growth.
          </div>
    </CardFooter>
    </div>
    
    </>
  )}

 
  const Users = ({ selectedDateRange }: { selectedDateRange?: DateRange }) => {
    const defaultDateRange: DateRange = ["January", "December"]; // Example default range
  const range = selectedDateRange || defaultDateRange;
  console.log(range)
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Source />
                <Box />
                <Retention selectedDateRange={range}/>
                <EngagedSession />
            </div>
        </>
    );
  };

export default Users


    

