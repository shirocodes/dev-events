export type EventItem = {
  image: string
  title: string
  slug: string
  location: string
  date: string // ISO format YYYY-MM-DD
  time: string // 24h format HH:MM
}

// Curated sample of popular/upcoming developer events
export const events: EventItem[] = [
  {
    image: "/images/event2.jpg",
    title: "KubeCon + CloudNativeCon North America 2025",
    slug: "kubecon-na-2025",
    location: "Austin, TX",
    date: "2025-11-18",
    time: "09:00",
  },
  {
    image: "/images/event1.jpg",
    title: "GitHub Universe 2025",
    slug: "github-universe-2025",
    location: "San Francisco, CA",
    date: "2025-11-12",
    time: "10:00",
  },
  {
    image: "/images/event2.jpg",
    title: "Google I/O 2026",
    slug: "google-io-2026",
    location: "Mountain View, CA (Shoreline Amphitheatre)",
    date: "2026-05-14",
    time: "09:30",
  },
  {
    image: "/images/event1.jpg",
    title: "React Summit 2026",
    slug: "react-summit-2026",
    location: "Amsterdam, NL",
    date: "2026-06-12",
    time: "09:00",
  },
 
  {
    image: "/images/event2.jpg",
    title: "Next.js Conf 2026 (Online)",
    slug: "nextjs-conf-2026",
    location: "Online",
    date: "2026-10-07",
    time: "09:00",
  },
]
