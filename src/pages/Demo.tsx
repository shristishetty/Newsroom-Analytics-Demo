import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import Tags from "./Tags"
import Authors from "./Authors"
import Users from "./Users"

const Demo = () => {
  return (
    <Tabs defaultValue="Tags" className="w-full">
  <TabsList>
    <TabsTrigger value="Tags">Tags</TabsTrigger>
    <TabsTrigger value="Author">Author</TabsTrigger>
    <TabsTrigger value="User">User</TabsTrigger>
    <TabsTrigger value="Revenue">Revenue</TabsTrigger>
  </TabsList>
  <TabsContent value="Tags"><Tags/></TabsContent>
  <TabsContent value="Author"><Authors/></TabsContent>
  <TabsContent value="User"><Users/></TabsContent>
</Tabs>

  )
}

export default Demo