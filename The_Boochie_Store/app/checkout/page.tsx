"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "card",
  })

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the order
    console.log("Order submitted:", { items, ...formData })
    clearCart()
    alert("Order placed successfully!")
    router.push("/order-confirmation")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 p-4">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <div>
          <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
          <RadioGroup
            name="paymentMethod"
            value={formData.paymentMethod}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, paymentMethod: value }))}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Credit/Debit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi">UPI</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cod" id="cod" />
              <Label htmlFor="cod">Cash on Delivery</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="pt-4 border-t">
          <p className="font-medium">Total: Rs. {total.toFixed(2)}</p>
        </div>
        <Button type="submit" className="w-full">
          Place Order
        </Button>
      </form>
    </div>
  )
}

