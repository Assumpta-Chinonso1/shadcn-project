import { cn } from "@/lib/utils";

const CustomeButton = ({
    disabled,
    isRounded,

     }: {
        disabled: boolean;
        isRounded: boolean;

}) => {

    return(
       //  <button className={`text-sm ${disabled? "bg-gray-400" : "bg-blue-500"} 
         //${isRounded && "rounded-full" } p-4`}>
           // Hello
         //</button>
         <button className={cn("text-sm", disabled ? "bg-gray-400" : "bg-blue-500", isRounded && "rounded-full", "p-4")}>
            Hello</button>
    )
}

export default CustomeButton