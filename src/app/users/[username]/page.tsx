import CardLists from "@/components/CardLists"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Progress } from "@/components/ui/progress"
import { BadgeCheckIcon, Candy, Citrus, Shield } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import EditUser from "@/components/EditUser"

const SingleUserPage = () => {
    return(
        <div className="">
            <Breadcrumb>
                 <BreadcrumbList>
                   <BreadcrumbItem>
                              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                   </BreadcrumbItem>
                   <BreadcrumbSeparator />
                    <BreadcrumbItem>
                         <BreadcrumbLink href="/components">Users</BreadcrumbLink>
                         </BreadcrumbItem>
                          <BreadcrumbSeparator />
                           <BreadcrumbItem>
                       <BreadcrumbPage>Assum Dev</BreadcrumbPage>
                   </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    {/*Container*/}
                    <div className="mt-4 flex flex-col xl:flex-row gap-8">
                        {/*Left*/}
                        <div className="w-full xl:w-1/3 space-y-6">
                        
                        {/*Users Badges Container*/}
                        <div className="bg-primary-foreground p-4 rounded-lg">
                            <h1 className="text-xl font-semibold">Users Badges</h1>
                            <div className="flex gap-4 mt-4">
                                <HoverCard>
               <HoverCardTrigger>
                   <BadgeCheckIcon size={40} className="rounded-full bg-blue-500/60 border-blue-500/60 p-2"/>
               </HoverCardTrigger>
                       <HoverCardContent>
                          <h1 className="font-bold mb-2">Verified User</h1>
                          <p className="text-sm text-muted-foreground">This User has been verified by the admin</p>
                           </HoverCardContent>
                                </HoverCard>
                                 <HoverCard>
               <HoverCardTrigger>
                   <Shield size={40} className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"/>
               </HoverCardTrigger>
                       <HoverCardContent>
                          <h1 className="font-bold mb-2">Admin</h1>
                          <p className="text-sm text-muted-foreground">Admin users has access to all feature and  can manage users.</p>
                           </HoverCardContent>
                                </HoverCard>
                                 <HoverCard>
               <HoverCardTrigger>
                   <Candy size={40} className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"/>
               </HoverCardTrigger>
                       <HoverCardContent>
                          <h1 className="font-bold mb-2">Awarded</h1>
                          <p className="text-sm text-muted-foreground">This User has been awarded for thier contribution.</p>
                           </HoverCardContent>
                                </HoverCard>
                                 <HoverCard>
               <HoverCardTrigger>
                   <Citrus size={40} className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"/>
               </HoverCardTrigger>
                       <HoverCardContent>
                          <h1 className="font-bold mb-2">Popular</h1>
                          <p className="text-sm text-muted-foreground">This user has been popular in the coummunity.</p>
                           </HoverCardContent>
                                </HoverCard>
                            </div>
                        </div>

                         {/*Info Container*/}
                        <div className="bg-primary-foreground p-4 rounded-lg">
                            <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">Users Information</h1>
                        <Sheet>
                             <SheetTrigger asChild>
                                <Button>Edit User</Button>
                             </SheetTrigger>
                                     <EditUser/>
                                 </Sheet>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Profile Completion</p>
                                <Progress value={66} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Username:</span>
                                <span className="">Assum Dev</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <span className="font-bold">Email:</span>
                                <span className="">AssumDev4@gmail.com</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <span className="font-bold">Phone:</span>
                                <span className="">+234 679 3465</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <span className="font-bold">Location:</span>
                                <span className="">Lagos, Lagos Nigeria</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <span className="font-bold">Role:</span>
                                <Badge>Admin</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">Joined on 2022.02.25</p>
                        </div>

                         {/*Card list Container*/}
                        <div className="bg-primary-foreground p-4 rounded-lg">
                            <CardLists title="Top Subscribers"/></div>

                        </div>


                        {/*Right*/}
                        <div className="w-full xl:w-2/3 space-y-6">

                        {/*User card container*/}
                        <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>

                        {/*Chart Container*/}
                        <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>

                        </div>
                       </div>                      
                     </div>
    )
}

export default SingleUserPage