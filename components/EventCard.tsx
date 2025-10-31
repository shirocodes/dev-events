import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";

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
    <Link
      href={`/events/${slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-gray-800 bg-[#121212] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="h-[220px] w-full rounded-lg object-cover"
      />

      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <MapPin size={16} className="text-blue-400" />
        <p className="truncate">{location}</p>
      </div>

      <p className="text-[20px] font-semibold text-white line-clamp-1 group-hover:text-blue-400 transition">
        {title}
      </p>

      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-green-400" />
          <p>{date}</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-yellow-400" />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
