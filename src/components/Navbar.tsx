import { LogOut, Moon, Settings, User } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    return(
        <nav className="p-4 flex items-center justify-between">
            {/*Left side*/}
            collapseButton
        
        {/*Right Side*/}
        <div className="flex items-center gap-4">
                  <Link href="/"> DashBoard </Link>

              <Moon/>
 
<DropdownMenu>
  <DropdownMenuTrigger asChild>
                <Avatar>
  <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>

      <DropdownMenuItem>
        <User className="h-[1.2rem] w-[1.2rem] mr-2" />
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
        <Settings />
        Settings
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem  variant="destructive" >
       
        <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
        Logout
      </DropdownMenuItem>
     
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
        </div>
           
             </nav>
    )
}

export default  Navbar