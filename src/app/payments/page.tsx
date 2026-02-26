import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed52y",
      amount: 173,
      status: "success",
      username: "Raymond Murray",
      email: "raymondmurray@gmail.com",
    },
    {
      id: "728ed52z",
      amount: 843,
      status: "success",
      username: "Adam Sherman",
      email: "adamsherman@gmail.com",
    },
    {
      id: "728ed521f",
      amount: 914,
      status: "pending",
      username: "Anne Cruz",
      email: "annecruz@gmail.com",
    },
    {
      id: "728ed522a",
      amount: 421,
      status: "failed",
      username: "Sophia Lee",
      email: "sophialee@gmail.com",
    },
    {
      id: "728ed522b",
      amount: 256,
      status: "success",
      username: "Daniel Brooks",
      email: "danielbrooks@gmail.com",
    },
    {
      id: "728ed522c",
      amount: 678,
      status: "pending",
      username: "Olivia Carter",
      email: "oliviacarter@gmail.com",
    },
    {
      id: "728ed522d",
      amount: 999,
      status: "success",
      username: "Michael Johnson",
      email: "michaeljohnson@gmail.com",
    },
    {
      id: "728ed522e",
      amount: 305,
      status: "failed",
      username: "Isabella Martinez",
      email: "isabellamartinez@gmail.com",
    },
    {
      id: "728ed522f",
      amount: 120,
      status: "pending",
      username: "Ethan Walker",
      email: "ethanwalker@gmail.com",
    },
    {
      id: "728ed522g",
      amount: 760,
      status: "success",
      username: "Ava Thompson",
      email: "avathompson@gmail.com",
    },
    {
      id: "728ed522h",
      amount: 540,
      status: "success",
      username: "Liam Anderson",
      email: "liamanderson@gmail.com",
    },
    {
      id: "728ed522i",
      amount: 389,
      status: "pending",
      username: "Mia Robinson",
      email: "miarobinson@gmail.com",
    },
    {
      id: "728ed522j",
      amount: 612,
      status: "failed",
      username: "Noah Clark",
      email: "noahclark@gmail.com",
    },
    {
      id: "728ed522k",
      amount: 745,
      status: "success",
      username: "Charlotte Lewis",
      email: "charlottelewis@gmail.com",
    },
    {
      id: "728ed522l",
      amount: 215,
      status: "pending",
      username: "James Hall",
      email: "jameshall@gmail.com",
    },
    {
      id: "728ed522m",
      amount: 884,
      status: "success",
      username: "Amelia Young",
      email: "ameliayoung@gmail.com",
    },
    {
      id: "728ed522n",
      amount: 432,
      status: "failed",
      username: "Benjamin King",
      email: "benjaminking@gmail.com",
    },
    {
      id: "728ed522o",
      amount: 158,
      status: "success",
      username: "Harper Scott",
      email: "harperscott@gmail.com",
    },
    {
      id: "728ed522p",
      amount: 967,
      status: "pending",
      username: "Elijah Green",
      email: "elijahgreen@gmail.com",
    },
    {
      id: "728ed522q",
      amount: 301,
      status: "success",
      username: "Evelyn Adams",
      email: "evelynadams@gmail.com",
    },
    {
      id: "728ed522r",
      amount: 720,
      status: "failed",
      username: "William Baker",
      email: "williambaker@gmail.com",
    },
    {
      id: "728ed522s",
      amount: 499,
      status: "success",
      username: "Abigail Nelson",
      email: "abigailnelson@gmail.com",
    },
    {
      id: "728ed522t",
      amount: 652,
      status: "pending",
      username: "Lucas Carter",
      email: "lucascarter@gmail.com",
    },
    {
      id: "728ed522u",
      amount: 283,
      status: "success",
      username: "Emily Mitchell",
      email: "emilymitchell@gmail.com",
    },
    {
      id: "728ed522v",
      amount: 910,
      status: "failed",
      username: "Henry Perez",
      email: "henryperez@gmail.com",
    },
  ]
}



const PaymentsPage = async () => {
    
    const data = await getData()

    return(
         <div className="">
            <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
            <h1 className="font-semibold"> All Payments</h1>
            </div>
            <DataTable columns={columns} data={data}/>
         </div>
    )
}

export default PaymentsPage