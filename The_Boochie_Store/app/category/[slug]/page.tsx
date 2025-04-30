import { products, categories } from "@/lib/products"
import ProductGrid from "@/components/product-grid"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Convert slug back to category name
  const category = categories.find((c) => c.toLowerCase().replace(" ", "-") === params.slug)

  if (!category) {
    return <div>Category not found</div>
  }

  // Filter products by category
  const categoryProducts = products.filter((product) => product.category === category)

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{category}</h1>
      <ProductGrid products={categoryProducts} />
    </div>
  )
}

