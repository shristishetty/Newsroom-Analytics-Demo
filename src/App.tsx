
import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import Tags from "./pages/Tags"
import Authors from "./pages/Authors"
import Users from "./pages/Users"
import Revenue from './pages/Revenue'
import Features from './pages/Features'
// import Welcome from "./Welcome"



function App() {


  return (
    <>
    <div className='bg-back text-text p-6'>
      <div className='w-1/2'>
      <h1 className='text-3xl font-bold pl-5'>Newsroom Analytics</h1>
      <p className='text-lg pl-5 mt-3 leading-normal'>We help newsrooms make informed decisions, from identifying where to make their next hire to optimizing advertising spending, all aimed at enhancing audience engagement and driving revenue growth.</p>
      </div>
      <Tabs defaultValue="User" className="p-5">
  <TabsList>
  <TabsTrigger value="User">User Demographics</TabsTrigger>
    <TabsTrigger value="Author">Author Performance</TabsTrigger>
    <TabsTrigger value="Tags">Article Themes</TabsTrigger>
    <TabsTrigger value="Revenue">Revenue Attribution</TabsTrigger>
  </TabsList>
  <TabsContent value="User"><Users/></TabsContent>
  <TabsContent value="Author"><Authors/></TabsContent>
  <TabsContent value="Tags"><Tags/></TabsContent>
  <TabsContent value="Revenue"><Revenue/></TabsContent>
</Tabs>
  <h1 className='text-3xl text-center font-bold pl-5 mb-5'>More Features To Have</h1>
  <Features/>
  <hr/>
  <h1 className='text-3xl text-center font-bold pl-5 mt-3'>Find Our Product Interesting?</h1>
  <h2 className='text-xl text-center pl-5'>Contact us at swapneet@mit.edu</h2>
      </div>
    </>
  )
}

export default App
