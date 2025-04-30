export const categories = ["Minimalist", "Street Style", "Punny Science"] as const

// Define color variants
export const colorVariants = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Gray", hex: "#808080" },
  { name: "Red", hex: "#FF0000" },
  { name: "Blue", hex: "#0000FF" },
] as const

// Define product type
export type Product = {
  id: number
  name: string
  price: number
  category: (typeof categories)[number]
  description: string
  colors: {
    name: string
    hex: string
    image: string
  }[]
  sizes: string[]
}

// Define products
export const products: Product[] = [
  {
    id: 1,
    name: "Simple Tee",
    price: 799.0,
    category: "Minimalist",
    description: "A classic, no-fuss t-shirt for everyday wear.",
    colors: [
      { name: "Black", hex: "#000000", image: "/images/nirvana.jpg" },
      { name: "White", hex: "#FFFFFF", image: "/images/mockup.png" },
      { name: "Gray", hex: "#808080", image: "/images/Embrace.jpg" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Urban Graffiti",
    price: 899.0,
    category: "Street Style",
    description: "Bold and edgy tee inspired by urban art.",
    colors: [
      { name: "Black", hex: "#000000", image: "/images/urban-graffiti-black.jpg" },
      { name: "Red", hex: "#FF0000", image: "/images/urban-graffiti-red.jpg" },
      { name: "Blue", hex: "#0000FF", image: "/images/urban-graffiti-blue.jpg" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "E = mc²",
    price: 849.0,
    category: "Punny Science",
    description: "For those who like their humor with a side of physics.",
    colors: [
      { name: "White", hex: "#FFFFFF", image: "/images/emc2-white.jpg" },
      { name: "Gray", hex: "#808080", image: "/images/emc2-gray.jpg" },
      { name: "Blue", hex: "#0000FF", image: "/images/emc2-blue.jpg" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Test Tee",
    price: 799.0,
    category: "Minimalist",
    description: "A classic, no-fuss t-shirt for everyday wear.",
    colors: [
      { name: "Black", hex: "#000000", image: "/images/nirvana.jpg" },
      { name: "White", hex: "#FFFFFF", image: "/images/mockup.png" },
      { name: "Gray", hex: "#808080", image: "/images/Embrace.jpg" },
    ],
    sizes: ["S", "M", "L", "XL"],
  }
  // Add more products as needed
]

