import { List } from "lucide-react"
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card"
import Image from "next/image"
import { Badge } from "./ui/badge"

const popularContent = [
  {
    id: 1,
    title: "How to Increase Your Subscription Revenue",
    badge: "Marketing",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2300,
  },
  {
    id: 2,
    title: "The Ultimate Guide to Subscription Retention",
    badge: "Customer Success",
    image:
      "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1200,
  },
  {
    id: 3,
    title: "Top 10 Subscription Billing Software in 2024",
    badge: "Software",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3400,
  },
  {
    id: 4,
    title: "How to Handle Subscription Cancellations",
    badge: "Customer Support",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 150,
  },
  {
    id: 5,
    title: "The Future of Subscription Commerce",
    badge: "Industry Trends",
    image:
      "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2800,
  },
]

const latestTransactions = [
  {
    id: 1,
    title: "Subscriptions Renewal",
    badge: "Joy Henderson",
    image:
      "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2300,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Eleanor Pena",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1200,
  },
  {
    id: 3,
    title: "New Subscriptions",
    badge: "Jacob Jones",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3400,
  },
  {
    id: 4,
    title: "Refunds Processed",
    badge: "Cameron Williamson",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 150,
  },
  {
    id: 5,
    title: "Subscription Cancellations",
    badge: "Courtney Henry",
    image:
      "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2800,
  },
]

const topSubscribers = [
  {
    id: 1,
    title: "John Doe",
    badge: "Gold Subscriber",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2300,
  },
  {
    id: 2,
    title: "Jane Smith",
    badge: "Platinum Subscriber",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1200,
  },
  {
    id: 3,
    title: "Michael Johnson",
    badge: "Silver Subscriber",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3400,
  },
  {
    id: 4,
    title: "Emily Davis",
    badge: "Gold Subscriber",
    image:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 150,
  },
  {
    id: 5,
    title: "David Wilson",
    badge: "Platinum Subscriber",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2800,
  },
]

const CardLists = ({title}: {title:string}) => {

 const data = title === "Popular Content" ? popularContent : title === "Latest Transactions" ? latestTransactions : title === "Top Subscribers" ? topSubscribers : []
    
    return(
        <div className="">
            <h1 className="text-lg font-medium mb-6"> {title} </h1>
            <div className="flex flex-col gap-2">
                {data.map((item) => (
                    <Card key={item.id} className="flex-row items-center justify-between gap-4">
                        <div className="w-15 h-15 rounded-sm  relative overflow-hidden ">
                            <Image src={item.image} alt={item.title} fill className="object-cover"/>
                              </div>
                            <CardContent className="p-4 flex-1">
                                <CardTitle className="text-sm font-medium">
                                    {item.title}
                                </CardTitle>
                                <Badge variant="outline">{item.badge}</Badge>
                            </CardContent>
                            <CardFooter className="p-2">
                                {item.count /1000}k
                            </CardFooter>
                      

                    </Card>
                ))}
            </div>

        </div>
    )
}

export default CardLists