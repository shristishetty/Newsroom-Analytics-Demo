// "use client"

// import * as React from "react"
// import './App.css'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
// import Tags from "./pages/Tags"
// import Authors from "./pages/Authors"
// import Users from "./pages/Users"
// import Revenue from './pages/Revenue'
// import Features from './pages/Features'

// import { addDays, format } from "date-fns"
// import { CalendarIcon } from "lucide-react"
// import { DateRange } from "react-day-picker"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// export function DatePickerWithRange({
//   className,
//   selectedDateRange,
//   setSelectedDateRange,
// }: {
//   className?: string;
//   selectedDateRange: DateRange | undefined;
//   setSelectedDateRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
// }) {
//   return (
//     <div className={cn("grid gap-2", className)}>
//       <Popover>
//         <PopoverTrigger asChild>
//           <Button
//             id="date"
//             variant={"outline"}
//             className={cn(
//               "w-[300px] justify-start text-left font-normal",
//               !selectedDateRange && "text-muted-foreground"
//             )}
//           >
//             <CalendarIcon />
//             {selectedDateRange?.from ? (
//               selectedDateRange.to ? (
//                 <>
//                   {format(selectedDateRange.from, "LLL dd, y")} -{" "}
//                   {format(selectedDateRange.to, "LLL dd, y")}
//                 </>
//               ) : (
//                 format(selectedDateRange.from, "LLL dd, y")
//               )
//             ) : (
//               <span>Pick a date</span>
//             )}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-auto p-0" align="start">
//           <Calendar
//             initialFocus
//             mode="range"
//             defaultMonth={selectedDateRange?.from}
//             selected={selectedDateRange}
//             onSelect={setSelectedDateRange}
//             numberOfMonths={2}
//           />
//         </PopoverContent>
//       </Popover>
//     </div>
//   )
// }

// function App() {
//   const [selectedDateRange, setSelectedDateRange] = React.useState<DateRange | undefined>({
//     from: new Date(2022, 0, 20),
//     to: addDays(new Date(2022, 0, 20), 20),
//   })

//   return (
//     <>
//       <div className='bg-back text-text p-6'>
//         <div className='w-full text-justify sm:w-1/2 sm:text-start'>
//           <h1 className='text-3xl font-bold pl-5'>Newsroom Analytics</h1>
//           <p className='text-lg pl-5 mt-3 leading-normal'>
//             We help newsrooms make informed decisions, from identifying where to make their next hire to optimizing advertising spending, all aimed at enhancing audience engagement and driving revenue growth.
//           </p>
//         </div>
//         <div className="p-5">
//           <Tabs defaultValue="User">
//             <div className="flex flex-col md:flex-row items-start gap-4">
//               <div className="overflow-x-auto whitespace-nowrap flex-1">
//                 <TabsList className="flex gap-2">
//                   <TabsTrigger value="User" className="p-2">User Demographics</TabsTrigger>
//                   <TabsTrigger value="Author" className="p-2">Author Performance</TabsTrigger>
//                   <TabsTrigger value="Tags" className="p-2">Article Themes</TabsTrigger>
//                   <TabsTrigger value="Revenue" className="p-2">Revenue Attribution</TabsTrigger>
//                   <TabsTrigger value="Features" className="p-2">Features</TabsTrigger>
//                 </TabsList>
//               </div>

//               {/* DateRangePicker positioned next to TabsList on desktop */}
//               <div className="mt-4 md:mt-0 md:ml-4">
//                 <DatePickerWithRange
//                   selectedDateRange={selectedDateRange}
//                   setSelectedDateRange={setSelectedDateRange}
//                 />
//               </div>
//             </div>

//             <TabsContent value="User">
//               {/* <Users selectedDateRange={selectedDateRange} /> */}
//               <Users/>
//             </TabsContent>
//             <TabsContent value="Author">
//               <Authors />
//             </TabsContent>
//             <TabsContent value="Tags">
//               <Tags />
//             </TabsContent>
//             <TabsContent value="Revenue">
//               <Revenue />
//             </TabsContent>
//             <TabsContent value="Features">
//               <Features />
//             </TabsContent>
//           </Tabs>
//         </div>

//         <hr />
//         <h1 className='text-3xl text-center font-bold pl-5 mt-3'>Find Our Product Interesting?</h1>
//         <h2 className='text-lg text-center pl-5'>Contact us at swapneet@mit.edu</h2>
//       </div>
//     </>
//   )
// }

// export default App



"use client"

import * as React from "react"
import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import Tags from "./pages/Tags"
import Authors from "./pages/Authors"
import Users from "./pages/Users"
import Revenue from './pages/Revenue'
import Features from './pages/Features'

import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerWithRange({
  className,
  selectedDateRange,
  setSelectedDateRange,
}: {
  className?: string;
  selectedDateRange: DateRange | undefined;
  setSelectedDateRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !selectedDateRange && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {selectedDateRange?.from ? (
              selectedDateRange.to ? (
                <>
                  {format(selectedDateRange.from, "LLL dd, y")} -{" "}
                  {format(selectedDateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(selectedDateRange.from, "LLL dd, y")
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
            defaultMonth={selectedDateRange?.from}
            selected={selectedDateRange}
            onSelect={setSelectedDateRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

function App() {
  // Track the date range for each tab
  const [userDateRange, setUserDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const [authorDateRange, setAuthorDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const [tagsDateRange, setTagsDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const [revenueDateRange, setRevenueDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const [featuresDateRange, setFeaturesDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });


  const convertToMonthRange = (range: DateRange | undefined): [string, string] => {
    if (!range || !range.from || !range.to) {
      return ["January", "December"]; // Default if no valid range is available
    }
  
    const startMonth = range.from.toLocaleString("default", { month: "long" });
    const endMonth = range.to.toLocaleString("default", { month: "long" });
    return [startMonth, endMonth];
  };
  const dateRange = convertToMonthRange(userDateRange);
  return (
    <div className='bg-back text-text p-6'>
      <div className='w-full text-justify sm:w-1/2 sm:text-start'>
        <h1 className='text-3xl font-bold pl-5'>Newsroom Analytics</h1>
        <p className='text-lg pl-5 mt-3 leading-normal'>
          We help newsrooms make informed decisions, from identifying where to make their next hire to optimizing advertising spending, all aimed at enhancing audience engagement and driving revenue growth.
        </p>
      </div>
      <div className="p-5">
        <Tabs defaultValue="User">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="overflow-x-auto whitespace-nowrap flex-1">
              <TabsList className="flex gap-2">
                <TabsTrigger value="User" className="p-2">User Demographics</TabsTrigger>
                <TabsTrigger value="Author" className="p-2">Author Performance</TabsTrigger>
                <TabsTrigger value="Tags" className="p-2">Article Themes</TabsTrigger>
                <TabsTrigger value="Revenue" className="p-2">Revenue Attribution</TabsTrigger>
                <TabsTrigger value="Features" className="p-2">Features</TabsTrigger>
              </TabsList>
            </div>

            {/* DateRangePicker positioned next to TabsList on desktop */}
            <div className="mt-4 md:mt-0 md:ml-4">
              <DatePickerWithRange
                selectedDateRange={userDateRange} // Pass the specific date range to each tab
                setSelectedDateRange={setUserDateRange} // Set function specific to this tab
              />
            </div>
          </div>

          <TabsContent value="User">
            <Users selectedDateRange={dateRange} />
            {/* <Users  /> */}
          </TabsContent>
          <TabsContent value="Author">
            <Authors />
          </TabsContent>
          <TabsContent value="Tags">
            <Tags />
          </TabsContent>
          <TabsContent value="Revenue">
            <Revenue  />
          </TabsContent>
          <TabsContent value="Features">
            <Features  />
          </TabsContent>
        </Tabs>
      </div>

        {/* <h1 className='text-3xl text-center font-bold pl-5 mb-5'>More Features To Have</h1> */}
        {/* <Features /> */}
        <hr />
        <h1 className='text-3xl text-center font-bold pl-5 mt-6'>Find Our Product Interesting?</h1>
        <h2 className='text-lg text-center pl-5'>Contact us at swapneet@mit.edu</h2>
      </div>
  )
}

export default App
