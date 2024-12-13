"use client"

import * as React from "react"
import { useEffect, useState } from "react";

import { Facebook, TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis,Bar, BarChart, LabelList, Pie, PieChart, Line, LineChart ,Label, PolarAngleAxis, PolarGrid, Radar, RadarChart, Rectangle  } from "recharts"
import { format } from "date-fns";

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

import dataJson from './data.json';


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
        <CardTitle className="font-bold text-lg">Engaged Sessions</CardTitle>
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

} satisfies ChartConfig



export function Retention({ selectedMonth }: { selectedMonth?: Date }) {
  // Set default to January if no month is selected
  const selectedMonthName = selectedMonth ? format(selectedMonth, "MMM") : "Jan"; // Default to "Jan" if no month is provided

  // Find the "Retention Percentage" graph data
  const graphData = dataJson.graphs.find(graph => graph.title === "Retention Percentage")?.data;

  // If no "Retention Percentage" data is found, return null
  if (!graphData) {
    console.error("No Retention Percentage data found.");
    return null;
  }

  // Map the data based on the selected month
  const filteredData = Object.entries(graphData).map(([ageGroup, monthlyData]) => ({
    ageGroup,
    retention: monthlyData[selectedMonthName] || 0,
    fill: monthlyData.fill,  // Store the fill color
  }));

  // Debugging: Log the filtered data
  console.log("Filtered Data for Chart:", filteredData);

  // Check if filteredData has valid content
  if (filteredData.length === 0) {
    console.error("No valid data found for the selected month.");
    return null;
  }

  // Find the max and min retention values for the chart
  const mostRetention = Math.max(...filteredData.map(item => item.retention));
  const leastRetention = Math.min(...filteredData.map(item => item.retention));

  // Find the corresponding age group (label) for the most and least retention values
  const mostLabel = filteredData.find(item => item.retention === mostRetention)?.ageGroup || "";
  const leastLabel = filteredData.find(item => item.retention === leastRetention)?.ageGroup || "";

  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-bold text-lg">Retention Percentage Per Age Group</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={reteConfig}>
        {/* BarChart component from recharts */}
        <BarChart data={filteredData} width={500} height={300}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="ageGroup"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value} // Display age group labels
          />
          {/* Re-enabling tooltip with custom content */}
          <ChartTooltip
            cursor={false}
            content={({ payload, label }) => {
              if (payload && payload.length) {
                const { retention } = payload[0].payload;
                return (
                  <div style={{ backgroundColor: '#000', padding: '5px', border: '1px solid #ccc', color:"#fff"}}>
                    <strong>{label}</strong><br />
                    Retention: {retention}%
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar
            dataKey="retention"
            strokeWidth={2}
            radius={8}
          />
          
        </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col text-center gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Retention rates show {mostRetention}% for the {mostLabel} age group, compared to {leastRetention}% for the {leastLabel} group. 
          To improve overall retention, focus on boosting engagement in the lower-performing segment while maintaining strong connections with the higher-performing group.
        </div>
      </CardFooter>
    </Card>
  );
}


// Traffic
const srcConfig = {
  desktop: {
    label: "Traffic",
    color: "hsl(var(--ring))",
  },

} satisfies ChartConfig;

export function Source({ selectedMonth }: { selectedMonth?: Date }) {
  // Default to "Jan" if no month is provided
  const selectedMonthName = selectedMonth ? format(selectedMonth, "MMM") : "Jan"; 

  // Find the "User Demographics" graph data
  const graphData = dataJson.graphs.find(graph => graph.title === "User Demographics")?.data;

  // If graphData is undefined or null, handle it gracefully
  if (!graphData) {
    return <div>No data available</div>;
  }

  // Now, ensure each platform's data exists for the selected month
  const monthData = {
    Google: graphData.Google ? graphData.Google[selectedMonthName as keyof typeof graphData.Google] : 0,
    Instagram: graphData.Instagram ? graphData.Instagram[selectedMonthName as keyof typeof graphData.Instagram] : 0,
    Bluesky: graphData.Bluesky ? graphData.Bluesky[selectedMonthName as keyof typeof graphData.Bluesky] : 0,
    Reddit: graphData.Reddit ? graphData.Reddit[selectedMonthName as keyof typeof graphData.Reddit] : 0,
    Facebook: graphData.Facebook ? graphData.Facebook[selectedMonthName as keyof typeof graphData.Facebook] : 0
  };

  // Sort the data for each platform based on the selected month
  const sortedData = Object.entries(monthData)
    .map(([platform, count]) => ({ platform, count }))
    .sort((a, b) => b.count - a.count); // Sort descending by count

  // Extract the months with the highest and lowest engagement
  const first = sortedData[0].platform;
  const second = sortedData[1].platform;
  const least = sortedData[sortedData.length - 1].platform;
  const least2 = sortedData[sortedData.length - 2].platform;

  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-bold text-lg">Where Does Our Audience Come From?</CardTitle>
        <CardDescription>
          Showing total visitors for the selected month: {selectedMonthName}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-1">
        <ChartContainer
          config={srcConfig}
          className="mx-auto max-h-[300px]"
        >
          <RadarChart data={sortedData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="platform" />
            <PolarGrid />
            <Radar
              dataKey="count"
              fill="var(--color-desktop)" // Adjust the fill color dynamically if needed
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col text-center gap-2 text-base">
        <div className="leading-none text-muted-foreground">
          Visitor traffic peaks on {first} and {second}, while {least} and {least2} show lower engagement. Focus on strengthening successful channels and optimizing underperforming ones.
        </div>
      </CardFooter>
    </Card>
  );
}


const ageConfig = {
  housing: {
    label: "Housing",
    color: "hsl(var(--chart-a5))",
  },
  politics: {
    label: "Politics",
    color: "hsl(var(--chart-a1))",
  },
  government: {
    label: "Arts",
    color: "hsl(var(--chart-a2))",
  },
} satisfies ChartConfig

const age = [
  { month: "18-24", housing: generateRandomNumber(50, 200), politics: generateRandomNumber(50, 150), government: generateRandomNumber(100, 300) },
  { month: "25-34", housing: generateRandomNumber(100, 300), politics: generateRandomNumber(100, 250), government: generateRandomNumber(200, 500) },
  { month: "35-44", housing: generateRandomNumber(100, 250), politics: generateRandomNumber(80, 200), government: generateRandomNumber(100, 400) },
  { month: "45-54", housing: generateRandomNumber(50, 150), politics: generateRandomNumber(100, 250), government: generateRandomNumber(150, 400) },
  { month: "55-64", housing: generateRandomNumber(100, 300), politics: generateRandomNumber(50, 200), government: generateRandomNumber(100, 350) },
  { month: "65+", housing: generateRandomNumber(100, 250), politics: generateRandomNumber(50, 200), government: generateRandomNumber(100, 300) },
];


interface AgeGroupData {
  month: string;
  housing: number;
  politics: number;
  government: number;
}

interface MaxMinStats {
  mostLabel: string;
  most: number;
  leastLabel: string;
  least: number;
}

export function AgeGroup() {
  // Find the most and least for each category
  const getMaxMin = (data: AgeGroupData[], key: keyof AgeGroupData): MaxMinStats => {
    const maxData = data.reduce((max, current) => current[key] > max[key] ? current : max);
    const minData = data.reduce((min, current) => current[key] < min[key] ? current : min);

    // Return an object with most and least as numbers, and labels as strings
    return {
      mostLabel: maxData.month,  // Month with the most value (string)
      most: Number(maxData[key]), // Ensure that we are returning a number
      leastLabel: minData.month, // Month with the least value (string)
      least: Number(minData[key]), // Ensure that we are returning a number
    };
  };

  const housingStats = getMaxMin(age, "housing");
  const politicsStats = getMaxMin(age, "politics");
  const governmentStats = getMaxMin(age, "government");

  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-bold text-lg">Reaching Every Age Group</CardTitle>
        <div className="flex justify-center items-center">
          {/* <DatePickerWithRange/> */}
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={ageConfig}>
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
      <CardFooter className="flex-col text-center gap-2 text-base">
        <div className="leading-none text-muted-foreground">
          {/* Showing total visitors for the last 6 months */}
          The plot shows that Politics is most popular among the {politicsStats.mostLabel} age group, while it is least popular with the {politicsStats.mostLabel} group. Government has the highest reach with the {governmentStats.mostLabel} age group, while it has the lowest reach with the {governmentStats.leastLabel} group. Housing, on the other hand, is most engaged with by the {housingStats.mostLabel} age group, and least engaged with by the {housingStats.leastLabel} group.
        </div>
      </CardFooter>
    </Card>
  );
}

  type UsersProps = {
    selectedMonth?: Date;
  };

  const Users : React.FC<UsersProps> = ({ selectedMonth }) =>  {
    
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Source selectedMonth={selectedMonth} />
                
                <Retention selectedMonth={selectedMonth} />
                <EngagedSession />
                <AgeGroup/>
            </div>
        </>
    );
  };

export default Users


    

