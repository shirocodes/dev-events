import EventCard from "../components/EventCard"
import ExploreBtn from "../components/ExploreBtn"
import { events } from "@/lib/constants"

const page = () => {
  const gridMdCols = events.length < 3 ? "md:grid-cols-2" : "md:grid-cols-3"

  return (
    <section>
      <h1 className="text-center">
        Every developer's event companion <br /> An Event You cannot Miss!
      </h1>
      <p className="text-center mt-4">Hackathons, Meetups, and Conferences, all in one place.</p>
      <ExploreBtn />
      <div className="mt-20 space-y-6">
        <h3>Featured Events</h3>
        {events.length === 0 ? (
          <p className="text-light-200">No events yet. Check back soon.</p>
        ) : (
          <ul className={`events ${gridMdCols} list-none gap-6`}>
            {events.map((event) => (
              <li key={event.slug}>
                <EventCard {...event} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default page
