import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/products"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} className="group">
          <div className="aspect-square relative mb-2">
            <Image
              src={product.colors[0].image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium group-hover:underline">{product.name}</h3>
            <p className="text-sm">Rs. {product.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

