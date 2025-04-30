"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/context/cart-context"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity } = useCart()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleRemoveFromCart = (itemId: number, size: string, color: string) => {
    removeFromCart(itemId, size, color)
    alert("Item removed from cart")
  }

  const handleUpdateQuantity = (itemId: number, size: string, color: string, quantity: number) => {
    updateQuantity(itemId, size, color, quantity)
    alert("Cart updated")
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Link href="/" className="text-sm underline">
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Your cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 items-center">
            <div className="w-20 h-20 relative">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover rounded-sm" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm">
                Size: {item.size}, Color: {item.color}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleUpdateQuantity(item.id, item.size, item.color, Number(e.target.value))}
                className="w-16"
              />
              <p>Rs. {(item.price * item.quantity).toFixed(2)}</p>
              <Button variant="ghost" size="icon" onClick={() => handleRemoveFromCart(item.id, item.size, item.color)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center pt-4 border-t">
        <p className="font-medium">Estimated total</p>
        <p className="font-medium">Rs. {total.toFixed(2)}</p>
      </div>
      <div className="flex justify-between gap-4">
        <Link href="/" className="text-sm underline">
          Continue shopping
        </Link>
        <Button className="bg-black text-white hover:bg-black/90" asChild>
          <Link href="/checkout">Check out</Link>
        </Button>
      </div>
    </div>
  )
}

