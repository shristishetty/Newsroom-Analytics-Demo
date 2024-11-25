
import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import Tags from "./pages/Tags"
import Authors from "./pages/Authors"
import Users from "./pages/Users"
// import Welcome from "./Welcome"



function App() {


  return (
    <>
    <div className='bg-back text-text p-6 mb-8'>
      <div className='w-1/2'>
      <h1 className='text-3xl font-bold pl-5'>Newsroom Analytics</h1>
      <p className='text-lg pl-5 mt-3 leading-normal'>We help newsrooms make informed decisions, from identifying where to make their next hire to optimizing advertising spending, all aimed at enhancing audience engagement and driving revenue growth.</p>
      </div>
      <Tabs defaultValue="User" className="p-5">
  <TabsList>
  <TabsTrigger value="User">User Demographics</TabsTrigger>
    <TabsTrigger value="Tags">Tags</TabsTrigger>
    <TabsTrigger value="Author">Author</TabsTrigger>
    <TabsTrigger value="Revenue">Revenue</TabsTrigger>
  </TabsList>
  <TabsContent value="User"><Users/></TabsContent>
  {/* <TabsContent value="Author"><Authors/></TabsContent>
  <TabsContent value="User"><Users/></TabsContent> */}
</Tabs>
      </div>
    </>
  )
}

export default App
