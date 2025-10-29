import Link from "next/link"
import Image from "next/image"

interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}
const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} className="event-card">
         <Image src={image} alt={title} width={410} height={300} className="poster"/>
         <p className="title">{title}</p>
         <div className="datetime">
           <div>{location}</div>
           <div>{date}</div>
           <div>{time}</div>
         </div>
    </Link>
  )
}

export default EventCard