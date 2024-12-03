"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis,Bar, BarChart, LabelList, Pie, PieChart, Line, LineChart ,Label, PolarAngleAxis, PolarGrid, Radar, RadarChart  } from "recharts"

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

// export function EngagedSession() {
  
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Engaged Sessions</CardTitle>
//         <CardDescription></CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <AreaChart
//             accessibilityLayer
//             data={chartData}
//             margin={{
//               left: 12,
//               right: 12,
//             }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="month"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
//             <defs>
//               <linearGradient id="fill18-24" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="var(--color-18-24)" stopOpacity={0.8} />
//                 <stop offset="95%" stopColor="var(--color-18-24)" stopOpacity={0.1} />
//               </linearGradient>
//               <linearGradient id="fill25-34" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="var(--color-25-34)" stopOpacity={0.8} />
//                 <stop offset="95%" stopColor="var(--color-25-34)" stopOpacity={0.1} />
//               </linearGradient>
//               <linearGradient id="fill35-44" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="var(--color-35-44)" stopOpacity={0.8} />
//                 <stop offset="95%" stopColor="var(--color-35-44)" stopOpacity={0.1} />
//               </linearGradient>
//               <linearGradient id="fill45-54" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="var(--color-45-54)" stopOpacity={0.8} />
//                 <stop offset="95%" stopColor="var(--color-45-54)" stopOpacity={0.1} />
//               </linearGradient>
//               <linearGradient id="fill55-64" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="var(--color-55-64)" stopOpacity={0.8} />
//                 <stop offset="95%" stopColor="var(--color-55-64)" stopOpacity={0.1} />
//               </linearGradient>
//               <linearGradient id="fill65+" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="var(--color-65+)" stopOpacity={0.8} />
//                 <stop offset="95%" stopColor="var(--color-65+)" stopOpacity={0.1} />
//               </linearGradient>
//             </defs>
//             <Area
//               dataKey="18-24"
//               type="natural"
//               fill="url(#fill18-24)"
//               fillOpacity={0.4}
//               stroke="var(--color-18-24)"
//               stackId="a"
//             />
//             <Area
//               dataKey="25-34"
//               type="natural"
//               fill="url(#fill25-34)"
//               fillOpacity={0.4}
//               stroke="var(--color-25-34)"
//               stackId="a"
//             />
//             <Area
//               dataKey="35-44"
//               type="natural"
//               fill="url(#fill35-44)"
//               fillOpacity={0.4}
//               stroke="var(--color-35-44)"
//               stackId="a"
//             />
//             <Area
//               dataKey="45-54"
//               type="natural"
//               fill="url(#fill45-54)"
//               fillOpacity={0.4}
//               stroke="var(--color-45-54)"
//               stackId="a"
//             />
//             <Area
//               dataKey="55-64"
//               type="natural"
//               fill="url(#fill55-64)"
//               fillOpacity={0.4}
//               stroke="var(--color-55-64)"
//               stackId="a"
//             />
//             <Area
//               dataKey="65+"
//               type="natural"
//               fill="url(#fill65+)"
//               fillOpacity={0.4}
//               stroke="var(--color-65+)"
//               stackId="a"
//             />
//             <ChartLegend content={<ChartLegendContent />} />
//           </AreaChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter>
//         <div className="flex w-full items-start gap-2 text-sm">
//           <div className="grid gap-2">
//             <div className="flex items-center gap-2 font-medium leading-none">
//               {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" /> */}
//               Engaged sessions show {most} sessions per month for the {mostLabel} age group, compared to {least} sessions per month for the {leastLabel} group. To enhance overall engagement, prioritize increasing session frequency in the lower-performing segment while continuing to nurture high levels of activity in the more engaged group.
//             </div>
//             <div className="flex items-center gap-2 leading-none text-muted-foreground">
//               {/* January - December 2024 */}
//             </div>
//           </div>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }

// Retention Data


type AgeGroup = "18-24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+";

type TotalSessions = {
  [key in AgeGroup]: number;
};
export function EngagedSession() {
  // Calculate total sessions for each age group
  const totalSessions: TotalSessions = chartData.reduce((totals, data) => {
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
        <div className="flex w-full text-center gap-2 text-sm">
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

const ageColorMap = {
  "18-24": "hsl(var(--chart-1))",
  "25-34": "hsl(var(--chart-2))",
  "35-44": "hsl(var(--chart-3))",
  "45-54": "hsl(var(--chart-4))",
  "55-64": "hsl(var(--chart-5))",
  "65+": "hsl(var(--chart-6))",  // Add a new color for the "65+" age group
};

export function Retention() {
  const mostRetention = Math.max(...retData.map((item) => item.desktop));
  const leastRetention = Math.min(...retData.map((item) => item.desktop));

  // Find the corresponding age group (label) for the most and least retention values
  const mostLabel = retData.find((item) => item.desktop === mostRetention)?.age || "";
  const leastLabel = retData.find((item) => item.desktop === leastRetention)?.age || "";
  return (
    <Card>
      <CardHeader className="items-center pb-0">
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
                className="fill-text"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col text-center gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          {/* Showing total visitors for the last 6 months */}
          Retention rates show {mostRetention}% for the {mostLabel} age group, compared to {leastRetention}% for the {leastLabel} group. To improve overall retention, focus on boosting engagement in the lower-performing segment while maintaining strong connections with the higher-performing group.
        </div>
      </CardFooter>
    </Card>
  )
}


// export function Retention() {
//   const mostRetention = Math.max(...retData.map((item) => item.desktop));
//   const leastRetention = Math.min(...retData.map((item) => item.desktop));

//   // Find the corresponding age group (label) for the most and least retention values
//   const mostLabel = retData.find((item) => item.desktop === mostRetention)?.age || "";
//   const leastLabel = retData.find((item) => item.desktop === leastRetention)?.age || "";

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Retention Percentage Per Age Group</CardTitle>
//         <CardDescription>January - June 2024</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={ret}>
//           <BarChart
//             accessibilityLayer
//             data={retData}
//             margin={{
//               top: 20,
//             }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="age"
//               tickLine={false}
//               tickMargin={10}
//               axisLine={false}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             {retData.map((item) => {
//               const color = ageColorMap[item.age as keyof typeof ageColorMap]; // Ensure the type matches
//               return color ? (
//                 <Bar
//                   key={item.age}
//                   dataKey="desktop"
//                   fill={color}
//                   radius={8}
//                 >
//                   <LabelList
//                     position="top"
//                     offset={12}
//                     className="fill-text"
//                     fontSize={12}
//                   />
//                 </Bar>
//               ) : null;
//             })}
//           </BarChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col items-start gap-2 text-sm">
//         <div className="flex gap-2 font-medium leading-none">
//           {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" /> */}
//           {/* (summary) */}
//         </div>
//         <div className="leading-none text-muted-foreground text-center">
//           {/* Showing total visitors for the last 6 months */}
//           Retention rates show {mostRetention}% for the {mostLabel} age group, compared to {leastRetention}% for the {leastLabel} group. To improve overall retention, focus on boosting engagement in the lower-performing segment while maintaining strong connections with the higher-performing group.
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }



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
// Get the top 2 months by desktop traffic
const first = sortedDataByDesktop[0].month;
const second = sortedDataByDesktop[1].month;

// Get the bottom 2 months by desktop traffic
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
      <CardFooter className="flex-col text-center gap-2 text-sm">
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
    <CardFooter className="pt-5 flex-col text-center gap-2 text-sm">
          <div className="leading-none text-muted-foreground">
    With {activeVisitors.toLocaleString()} active users and {newVisitors.toLocaleString()} new visitors, now is the time to strengthen engagement and convert these visitors into long-term supporters. Focus on building lasting connections to drive sustained growth.
          </div>
    </CardFooter>
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


    

