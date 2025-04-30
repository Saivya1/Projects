"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Star, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { products, type Product } from "@/lib/products"

// Mock reviews data
const reviews = [
  { id: 1, name: "John Doe", rating: 4, comment: "Great product!" },
  { id: 2, name: "Jane Smith", rating: 5, comment: "Absolutely love it!" },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<Product["colors"][0] | null>(null)
  const [showSizeChart, setShowSizeChart] = useState(false)
  const [newReview, setNewReview] = useState({ rating: 0, comment: "", name: "", phone: "" })

  const product = products.find((p) => p.id === Number.parseInt(params.id))

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0])
    }
  }, [product])

  if (!product) return <div>Product not found</div>

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color")
      return
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: selectedColor.image,
      size: selectedSize,
      color: selectedColor.name,
      quantity: 1,
    })
    alert("Added to cart")
  }

  const handleBuyNow = () => {
    handleAddToCart()
    router.push("/checkout")
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the review to your backend
    alert("Review submitted successfully!")
    setNewReview({ rating: 0, comment: "", name: "", phone: "" })
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <div className="space-y-12">
      {/* Product details */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square relative">
            <Image
              src={selectedColor?.image || product.colors[0].image}
              alt={product.name}
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <div className="flex justify-center space-x-2">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${selectedColor?.name === color.name ? "border-black" : "border-transparent"}`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-lg">Rs. {product.price.toFixed(2)}</p>
          </div>
          <p>{product.description}</p>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Size</label>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <Button onClick={() => setShowSizeChart(true)}>Size Chart</Button>
            <div className="flex gap-4">
              <Button className="flex-1 bg-black text-white hover:bg-black/90" onClick={handleAddToCart}>
                Add to cart
              </Button>
              <Button className="flex-1" variant="outline" onClick={handleBuyNow}>
                Buy now
              </Button>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Our t-shirts are crafted with premium 100% bio-washed cotton, ensuring exceptional comfort and durability.
            Each piece is meticulously designed to provide a perfect fit and long-lasting quality.
          </p>
        </div>
      </div>

      {/* Reviews section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Customer Reviews</h2>
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={star <= averageRating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span>{averageRating.toFixed(1)} out of 5</span>
        </div>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-t pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="font-medium">{review.name}</span>
              </div>
              <p className="mt-1">{review.comment}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmitReview} className="space-y-4">
          <h3 className="font-medium">Write a review</h3>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} type="button" onClick={() => setNewReview({ ...newReview, rating: star })}>
                <Star className={star <= newReview.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={newReview.phone}
            onChange={(e) => setNewReview({ ...newReview, phone: e.target.value })}
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Write your review here..."
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            required
          />
          <Button type="submit">Submit Review</Button>
        </form>
      </div>

      {/* Size chart modal */}
      {showSizeChart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Size Chart</h2>
              <button onClick={() => setShowSizeChart(false)}>
                <X size={24} />
              </button>
            </div>
            <Image
              src="/images/sizechart.png"
              alt="Size Chart"
              width={100}
              height={100}
              
            
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  )
}

