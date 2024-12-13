"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis , PieChart, Pie, Label,LabelList} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  // ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"

import dataJson from './data.json';
import { format } from "date-fns";

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomData = () => {
  return [
    { browser: "Politics", desktop: 3123, mobile: 4215 }, // Mobile overtakes desktop due to casual scrolling on social media.
    { browser: "Art", desktop: 2789, mobile: 1567 }, // Desktop leads, reflecting deeper engagement.
    { browser: "Environment", desktop: 4897, mobile: 2196 }, // Subscribers drive desktop traffic heavily.
    { browser: "Health", desktop: 5234, mobile: 6879 }, // Mobile surpasses desktop as users access quick health tips on the go.
    { browser: "Housing", desktop: 3421, mobile: 1845 }, // Desktop leads for detailed content like property searches.
  ];   
};

const graphchartData = generateRandomData();

export function SubscriberThemes({ selectedMonth }: { selectedMonth?: Date }) {
  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-bold text-lg">What Do Subscribers Want?</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={graphchartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col text-center gap-2 text-base">
        <div className="leading-none text-muted-foreground">
        With Non-Subscribers driving higher event counts in Health and Politics, there’s a greater opportunity to target this audience for increased engagement, especially on-the-go topics.
        </div>
      </CardFooter>
    </Card>
  )
}


interface VisitorData {
  value: number;
  fill: string;
}

// Define the structure of the data
interface MonthData {
  Subscribers: VisitorData;
  NonSubscribers: VisitorData;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { value } = payload[0];  // Access the first payload item
    return (
      <div style={{ backgroundColor: '#000', padding: '5px', border: '1px solid #ccc', color:"#fff"}}>
        <p>{`Visitors: ${value}`}</p>
      </div>
    );
  }
  return null;
};

const eventConfig = {
  visitors: {
    label: "Visitors"
  },
  Subscribers: {
    label: "Subscribers",
    color: "hsl(var(--chart-sub))"
  },
  NonSubscribers: {
    label: "Non Subscribers",
    color: "hsl(var(--chart-nonsub))"
  }
}


export function EventCount({ selectedMonth }: { selectedMonth?: Date }) {
  const selectedMonthName = selectedMonth ? format(selectedMonth, "MMM") : "Jan";

  // Find the "Article Overperformance" graph data
  const graphData = dataJson.graphs.find(graph => graph.title === "Subscribers vs Non-Subscribers")?.data;

  // If graphData is undefined or null, handle it gracefully
  if (!graphData) {
    return <div>No data available</div>;
  }

  // Safely get the data for the month
  const monthData: MonthData = {
    Subscribers: graphData.Subscribers
      ? {
          value: Number(graphData.Subscribers[selectedMonthName as keyof typeof graphData.Subscribers]) || 0, // Coerce to number
          // fill: graphData.Subscribers.fill
          fill: eventConfig["Subscribers"].color
        }
      : { value: 0, fill: "" },
    
    NonSubscribers: graphData.NonSubscribers
      ? {
          value: Number(graphData.NonSubscribers[selectedMonthName as keyof typeof graphData.NonSubscribers]) || 0, // Coerce to number
          fill: graphData.NonSubscribers.fill
        }
      : { value: 0, fill: "" }
  };

  
  // Convert the monthData object into an array for sorting and chart rendering
  const sortedData = Object.entries(monthData)
  .map(([cate, data]) => ({
    cate,
    visitors: data.value,
    fill: data.fill,
  }))
  .sort((a, b) => b.visitors - a.visitors); // Sorting based on the 'value' of visitors

console.log(sortedData);

  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-bold text-lg">How Do Subscribers and Non-Subscribers Compare?</CardTitle>
        <CardDescription>Showing data for {selectedMonthName} 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={eventConfig}>
          <BarChart accessibilityLayer data={sortedData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="cate"  // Use category name (e.g., 'Subscribers', 'NonSubscribers')
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<CustomTooltip />} />  {/* Use custom tooltip */}
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="visitors" radius={8} > {/* Display the value of visitors */}
            <LabelList
                position="top"
                offset={5}
                className="fill-text"
                fontSize={12}
              />
              </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col text-center gap-2 text-base">
        <div className="leading-none text-muted-foreground">
          Considering the significantly higher event count from Non-Subscribers, there is a larger audience that needs to be targeted for greater reach.
        </div>
      </CardFooter>
    </Card>
  );
}

import * as React from "react"

  

interface ChartConfig {
  [key: string]: { label: string; color: string };
}

// Example chartConfig object
const chartConfig: ChartConfig = {
    // visitors: {
    //   label: "Visitors",
    // },
    Politics: {
      label: "Politics",
      color: "hsl(var(--chart-a1))",
    },
    Arts: {
      label: "Art & Culture",
      color: "hsl(var(--chart-a2))",
    },
    Environment: {
      label: "Environment",
      color: "hsl(var(--chart-a3))",
    },
    Health: {
      label: "Health",
      color: "hsl(var(--chart-a4))",
    },
    Housing: {
      label: "Housing",
      color: "hsl(var(--chart-a5))",
    },
    desktop: {
      label: "Subscribers",
      color: "hsl(var(--chart-sub))",
    },
    mobile: {
      label: "Non-Subscribers",
      color: "hsl(var(--chart-nonsub))",
    },
    eventcount: {
      label: "Event Count",
      color: "hsl(var(--chart-1))",
    }
  } 
  


  export function RevenueAttribution({ selectedMonth }: { selectedMonth?: Date }) {
    // Default to "Jan" if no month is provided
    const selectedMonthName = selectedMonth ? format(selectedMonth, "MMM") : "Jan";
  
    // Type guard to ensure the key exists in chartConfig
    function isChartConfigKey(key: string): key is keyof typeof chartConfig {
      return key in chartConfig;
    }
  
    // Get the revenue data for the selected month
    const revenueData = Object.entries(
      dataJson.graphs.find((graph) => graph.title === "Revenue per Article Theme (USD)")?.data || {}
    ).map(([theme, revenuePerMonth]) => {
      const revenue = (revenuePerMonth as Record<string, number>)[selectedMonthName] || 0;
  
      return {
        theme,
        revenue,
        color: isChartConfigKey(theme) ? String(chartConfig[theme].color) : "#ff0",
      };
    });
  
    // Calculate total revenue for the selected month
    const totalRevenue = React.useMemo(() => {
      return revenueData.reduce((acc, curr) => acc + curr.revenue, 0);
    }, [revenueData]);
  
    // Prepare chart data for the pie chart
    const chartData = revenueData.map((data) => ({
      browser: data.theme, // Use the theme name as the browser label
      visitors: data.revenue, // Map revenue to the 'visitors' field
      fill: String(data.color), // Ensure the fill color is a string
    }));
  
    return (
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle className="font-bold text-lg">Where Is the Revenue Coming From?</CardTitle>
          <div className="flex justify-center items-center">
            {/* Optionally, add a date picker here */}
          </div>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
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
                            className="fill-text text-4xl font-bold"
                          >
                            {totalRevenue.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Dollars ($)
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col text-center gap-2 text-base">
          <div className="leading-none text-muted-foreground">
            To maximize revenue potential, investing in Health and Politics, which attract the highest visitor engagement, could yield significant returns.
          </div>
        </CardFooter>
      </Card>
    );
  }
  
  

type RevenueProps = {
  selectedMonth?: Date;
};

const Revenue : React.FC<RevenueProps> = ({ selectedMonth }) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <EventCount selectedMonth={selectedMonth}/>
                <SubscriberThemes selectedMonth={selectedMonth}/>
                <RevenueAttribution selectedMonth={selectedMonth}/>
            </div>
        </>
    );
  };

  export default Revenue