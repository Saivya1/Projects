"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (itemId: number, size: string, color: string) => void
  updateQuantity: (itemId: number, size: string, color: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id && i.size === item.size && i.color === item.color)
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id && i.size === item.size && i.color === item.color
            ? { ...i, quantity: i.quantity + item.quantity }
            : i,
        )
      }
      return [...prevItems, item]
    })
  }

  const removeFromCart = (itemId: number, size: string, color: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => !(item.id === itemId && item.size === size && item.color === color)),
    )
  }

  const updateQuantity = (itemId: number, size: string, color: string, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.size === size && item.color === color ? { ...item, quantity } : item,
      ),
    )
  }

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

