import Link from "next/link"
import Image from "next/image"
import { categories } from "@/lib/products"

// Define image URLs for each category
const categoryImages = {
  Minimalist: "/images/minimalist.jpg",
  "Street Style": "/images/streetwear.jpg",
  "Punny Science": "/images/punnyscience.png",
}

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100vh-64px)]">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/category/${category.toLowerCase().replace(" ", "-")}`}
          className="relative group overflow-hidden"
        >
          <Image
            src={categoryImages[category] || "/placeholder.svg"}
            alt={category}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-70">
            <h2 className="text-white text-3xl font-bold">{category}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}

