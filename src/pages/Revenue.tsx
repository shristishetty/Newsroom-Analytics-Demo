"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis , PieChart, Pie, Label} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"

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

export function SubscriberThemes() {
  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle>What Do Subscribers Want?</CardTitle>
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
      <CardFooter className="flex-col text-center gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
        With Non-Subscribers driving higher event counts in Health and Politics, there’s a greater opportunity to target this audience for increased engagement, especially on-the-go topics.
        </div>
      </CardFooter>
    </Card>
  )
}

const generateRandom2Data = () => {
  return [
    { browser: "Event Count", desktop: 25348, mobile: 47285 }, // Mobile overtakes desktop due to casual scrolling on social media.
  ];  
};

const graph2chartData = generateRandom2Data();

export function EventCount() {
  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle>How Do Subscribers and Non-Subscribers Compare?</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={graph2chartData}>
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
              dataKey="desktop"
              stackId="a"
              fill="var(--color-desktop)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="var(--color-mobile)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col text-center gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
        Considering the significantly higher event count from Non-Subscribers, there is a larger audience that needs to be targeted for greater reach.
        </div>
      </CardFooter>
    </Card>
  )
}

import * as React from "react"

const generateRandomPieData = () => {
  return [
    { browser: "politics", visitors: generateRandomNumber(150, 350), fill: "var(--color-politics)" },
    { browser: "art", visitors: generateRandomNumber(150, 350), fill: "var(--color-art)" },
    { browser: "environment", visitors: generateRandomNumber(150, 350), fill: "var(--color-environment)" },
    { browser: "health", visitors: generateRandomNumber(150, 350), fill: "var(--color-health)" },
    { browser: "housing", visitors: generateRandomNumber(150, 350), fill: "var(--color-housing)" },
  ];
};
const piechartData = generateRandomPieData();
  
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
      label: "Subscribers",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Non-Subscribers",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig
  
  const chartData = [
    { browser: "Politics", visitors: 4215, fill: "var(--color-politics)" },
    { browser: "Art", visitors: 1567, fill: "var(--color-art)" },
    { browser: "Environment", visitors: 2196, fill: "var(--color-environment)" },
    { browser: "Health", visitors: 6879, fill: "var(--color-health)" },
    { browser: "Housing", visitors: 1845, fill: "var(--color-housing)" },
  ]

  export function RevenueAttribution() {
    const totalVisitors = React.useMemo(() => {
      return piechartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])
  
    return (
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Where Is the Revenue Coming From?</CardTitle>
          {/* <CardDescription>January - June 2024</CardDescription> */}
          <div className="flex justify-center items-center">
  {/* <DatePickerWithRange/> */}
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
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Dollars ($)
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
        <CardFooter className="flex-col text-center gap-2 text-sm">
          <div className="leading-none text-muted-foreground">
          To maximize revenue potential, investing in Health and Politics, which attract the highest visitor engagement, could yield significant returns.
          </div>
        </CardFooter>
      </Card>
  )
}


const Revenue = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <EventCount/>
                <SubscriberThemes/>
                <RevenueAttribution/>
            </div>
        </>
    );
  };

  export default Revenue