'use client';
import { ChevronDown } from "lucide-react";


const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn"className="mt-6">
        <a href="#events">
            Explore Events
            <ChevronDown className="inline-block ml-2 mb-1"/>
        </a>
    </button>
  )
}

export default ExploreBtn