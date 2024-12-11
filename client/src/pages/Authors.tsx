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

import dataJson from './data.json';
import { format } from "date-fns";


// Overperformance
const chartConfig = {
  overperformance: {
    label: "Overperformance",
    // color: "hsl(var(--ring))",
  },

} satisfies ChartConfig;

export function Overperformance({ selectedMonth }: { selectedMonth?: Date }) {
  // Default to "Jan" if no month is provided
  const selectedMonthName = selectedMonth ? format(selectedMonth, "MMM") : "Jan"; 

  // Find the "Article Overperformance" graph data
  const graphData = dataJson.graphs.find(graph => graph.title === "Article Overperformance")?.data;

  // If graphData is undefined or null, handle it gracefully
  if (!graphData) {
    return <div>No data available</div>;
  }

  // Prepare the month data for each author
  const monthData = Object.keys(graphData).reduce((acc, author) => {
    const authorData = graphData[author];
    acc[author] = {
      overperformance: authorData ? authorData[selectedMonthName as keyof typeof authorData] : 0,
      fill: authorData?.fill || '',  // Add fill color
    };
    return acc;
  }, {} as Record<string, { overperformance: number, fill: string }>);

  // Convert the monthData object into an array for sorting and chart rendering
  const sortedData = Object.entries(monthData)
  .map(([author, { overperformance, fill }]) => ({ author, overperformance, fill })) // Add fill here
  .sort((a, b) => b.overperformance - a.overperformance); // Sort descending by overperformance

  // Get the first and last performers
  const first_op = sortedData[0].author;
  const least_op = sortedData[sortedData.length - 1].author;

  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-bold">Author Overperformance</CardTitle>
        <CardDescription>Showing data for {selectedMonthName} 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={postchart}>
          <BarChart
            accessibilityLayer
            data={sortedData}
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
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="overperformance" radius={8}>
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
      <CardFooter className="flex-col text-center gap-2 text-base">
        <div className="leading-none text-muted-foreground">
          The plot shows that {first_op} is the highest performer, while {least_op} is the lowest. To enhance overall results, it is important to work on increasing engagement for {least_op} while preserving the strong performance of {first_op}.
        </div>
      </CardFooter>
    </Card>
  );
}


  
const postchart = {
  overperformance: {
    label: "Overperformance",
    // color: "hsl(var(--ring))",
  },
  visitors: {
    label: "Visitors",
  },
  step: {
    label: "Stephen",
    color: "hsl(var(--chart-a1))",
  },
  peter: {
    label: "Peter",
    color: "hsl(var(--chart-a2))",
  },
  charlie: {
    label: "Charlie",
    color: "hsl(var(--chart-a3))",
  },
  nancy: {
    label: "Nancy",
    color: "hsl(var(--chart-a4))",
  },
  steve: {
    label: "Steve",
    color: "hsl(var(--chart-a5))",
  },
} satisfies ChartConfig;

export function Post({ selectedMonth }: { selectedMonth?: Date }) {
  // Default to "Jan" if no month is provided
  const selectedMonthName = selectedMonth ? format(selectedMonth, "MMM") : "Jan";

  // Find the "Total Articles" graph data from the JSON
  const graphData = dataJson.graphs.find(graph => graph.title === "Total Articles")?.data;

  // If graphData is undefined or null, handle it gracefully
  if (!graphData) {
    return <div>No data available</div>;
  }

  // Prepare the article count data for each author based on the selected month
  const monthData = Object.entries(graphData).reduce((acc, [author, monthlyData]) => {
    acc.push({
      author,
      articles: monthlyData[selectedMonthName as keyof typeof monthlyData] || 0,
      fill: monthlyData.fill, // Include the fill color
    });
    return acc;
  }, [] as { author: string; articles: number; fill: string }[]);

  // Sort the data by articles in descending order
  const sortedData = monthData.sort((a, b) => b.articles - a.articles);
  console.log(monthData)

  // Get the first and last authors
  const first = sortedData[0]?.author;
  const least = sortedData[sortedData.length - 1]?.author;

  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-bold">Numbers of Articles Posted By Authors</CardTitle>
        <CardDescription>Showing data for {selectedMonthName} 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={postchart}>
          <BarChart
            accessibilityLayer
            data={sortedData}
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
                postchart[value.toLowerCase() as keyof typeof postchart]?.label || value
              }
            />
            <XAxis dataKey="articles" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="articles"
              layout="vertical"
              radius={5}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col text-center gap-2 text-base">
        <div className="leading-none text-muted-foreground">
          The plot shows that {first} has posted the most articles, while {least} has posted the fewest. To improve overall content output, focus on encouraging more contributions from {least} while sustaining the strong posting rate of {first}.
        </div>
      </CardFooter>
    </Card>
  );
}


  type UsersProps = {
    selectedMonth?: Date;
  };
const Authors: React.FC<UsersProps> = ({ selectedMonth }) =>{
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Overperformance selectedMonth={selectedMonth}/>
        <Post selectedMonth={selectedMonth}/>
    </div>
    </>
  )
}

export default Authors