import { Handshake } from "lucide-react"
import Link from "next/link"

const NavBar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className="logo">
                <Handshake />
                <span>EventMate</span>
            </Link>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/">Events</Link>
                <Link href="/">Create Events</Link>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar