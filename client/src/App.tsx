"use client"

import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import Authors from "./pages/Authors"
import Users from "./pages/Users"
import Revenue from './pages/Revenue'
import Features from './pages/Features'
import Landing from './pages/Landing'

import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns/format";
import { cn } from "@/lib/utils";
import { MonthPicker } from "@/components/ui/monthpicker";
import Chatbot from './pages/Chatbot'

function Date({ onMonthSelect, selectedMonth }: { onMonthSelect: (date: Date) => void, selectedMonth?: Date }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant={"outline"} 
          className={cn(
            "w-full md:w-[280px] justify-start text-left font-normal",
            !selectedMonth && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedMonth ? format(selectedMonth, "MMM yyyy") : <span>Pick a month</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <MonthPicker onMonthSelect={onMonthSelect} selectedMonth={selectedMonth} />
      </PopoverContent>
    </Popover>
  );
}

function App() {
  const [selectedMonth, setSelectedMonth] = useState<Date | undefined>(undefined);

  return (
    <div className='bg-back text-text p-4 sm:p-6'>
      {/* Header Section */}
      <div className='w-full text-justify sm:w-1/2 sm:text-start'>
        <h1 className='text-3xl font-bold pl-5'>Newsroom Analytics</h1>
        <p className='text-lg pl-5 mt-3 leading-normal'>
          We help newsrooms make informed decisions, from identifying where to make their next hire to optimizing advertising spending, all aimed at enhancing audience engagement and driving revenue growth.
        </p>
      </div>

      {/* Tabs and Date Selector */}
      <div className="p-3 sm:p-5">
        <Tabs defaultValue="Landing">
          {/* Responsive Flex Container */}
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="overflow-x-auto whitespace-nowrap w-full md:flex-1">
              <TabsList className="flex gap-2">
                <TabsTrigger value="Landing" className="p-2 text-base">Info</TabsTrigger>
                <TabsTrigger value="User" className="p-2 text-base">User Demographics</TabsTrigger>
                <TabsTrigger value="Author" className="p-2 text-base">Author Performance</TabsTrigger>
                <TabsTrigger value="Revenue" className="p-2 text-base">Revenue Attribution</TabsTrigger>
                <TabsTrigger value="Features" className="p-2 text-base">Features</TabsTrigger>
              </TabsList>
            </div>

            {/* Date Picker - Adjusts Width for Small Screens */}
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <Date onMonthSelect={setSelectedMonth} selectedMonth={selectedMonth} />
            </div>
          </div>

          {/* Tabs Content */}
          <TabsContent value="Landing">
            <Landing selectedMonth={selectedMonth} />
          </TabsContent>
          <TabsContent value="User">
            <Users selectedMonth={selectedMonth} />
          </TabsContent>
          <TabsContent value="Author">
            <Authors selectedMonth={selectedMonth} />
          </TabsContent>
          <TabsContent value="Revenue">
            <Revenue selectedMonth={selectedMonth} />
          </TabsContent>
          <TabsContent value="Features">
            <Features />
          </TabsContent>
        </Tabs>
      </div>

      {/* Chatbot Section */}
      <Chatbot />

      {/* Footer Section */}
      <hr />
      <div className='text-center mt-6'>
        <h1 className='text-2xl sm:text-3xl font-bold'>Find Our Product Interesting?</h1>
        <h2 className='text-base sm:text-lg mt-2'>Contact us at swapneet@mit.edu</h2>
      </div>
    </div>
  )
}

export default App;
