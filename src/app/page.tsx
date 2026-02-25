///import { Button } from "@/components/ui/button"
//import { CirclePlus } from "lucide-react"

import AppAreaChart from "@/components/AppAreaChart"
import AppBarChart from "@/components/AppBarChart"
import AppPieChart from "@/components/AppPieChart"
import CardLists from "@/components/CardLists"
import TodoLists from "@/components/TodoLists"



const HomePage = () => {
  return (
    
   

    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4"> 

         {/*<div className="h-screen flex items-center justify-center">
      <Button  size="xl" className="rounded-full text-custom-color "> <CirclePlus/> Click Me</Button>
    </div>*/}

    <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-2 2xl:col-span-2 ">
      <AppBarChart/>
    </div>
    <div className="bg-primary-foreground p-4 rounded-lg">
          <CardLists title="Latest Transactions"/>
        </div>
     
                <div className="bg-primary-foreground p-4 rounded-lg ">
                  <AppPieChart/>
                </div>
        
        <div className="bg-primary-foreground p-4 rounded-lg">
      <TodoLists/>
     </div>
           
                    <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 ">
                      <AppAreaChart/>
                    </div>
                        <div className="bg-primary-foreground p-4 rounded-lg">
                          <CardLists title="Top Subscribers"/>
                        </div>
                        <div className="bg-primary-foreground p-4 rounded-lg">
                          
                              
                                  <CardLists title="Popular Content"/>

                        </div>
 
  
    </div>
  )
}
export default HomePage