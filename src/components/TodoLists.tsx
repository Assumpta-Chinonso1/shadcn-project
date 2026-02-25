"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "./ui/popover"
import { ScrollArea } from "./ui/scroll-area"
import {  Calendar1Icon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "./ui/calendar"

const TodoLists = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [popUp, setPopUp] = useState(false)

    return(
        <div className="">
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={popUp} onOpenChange={setPopUp}>
              <PopoverTrigger asChild >
                   <Button className="w-full">
                    <Calendar1Icon/>
                    {date ? format(date, "PPP") : <span>Pick a date</span> }
                   </Button>
               </PopoverTrigger>

                 <PopoverContent className="p-0 w-auto">
                       <Calendar
                     mode="single"
                      selected={date}
                       onSelect={(date) => {
                        setDate(date);
                        setPopUp(false);
                       }}
                    
                                  />
                </PopoverContent>
                </Popover>
            {/*List*/}
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto no-scrollbar">
                <div className="flex flex-col gap-4">
                {/*List Item*/}
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-2xl text-muted-foreground">
                            Code
                           
                        </label>
                    </div>
                </Card>
                 <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-2xl text-muted-foreground">
                         Gym
                           
                        </label>
                    </div>
                </Card>
                 <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-2xl text-muted-foreground">
                           Pray
                           
                        </label>
                    </div>
                </Card>
                 <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-2xl text-muted-foreground">
                            Read a book
                           
                        </label>
                    </div>
                </Card>
                 <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-2xl text-muted-foreground">
                            Write a blog post
                        </label>
                    </div>
                </Card>
                 <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-2xl text-muted-foreground">
                            Cook dinner
                           
                        </label>
                    </div>
                </Card>
                 <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-2xl text-muted-foreground">
                            Go for a walk
                           
                        </label>
                    </div>
                </Card>
                 <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-2xl text-muted-foreground">
                            Call a friend
                           
                        </label>
                    </div>
                </Card>
                 <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-2xl text-muted-foreground">
                            Plan a trip
                           
                        </label>
                    </div>
                </Card>
                 <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-2xl text-muted-foreground">
                            Learn a new skill
                           
                        </label>
                    </div>
                </Card>
                            </div>
            </ScrollArea>

        </div>
    )
}

export default TodoLists