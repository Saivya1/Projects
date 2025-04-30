"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingBag, User } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function Header() {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="top-0 z-50 bg-[#fce7a0] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
        <Image src="/images/the_boochie_store_white_label.png" alt="The Boochie Store" width={200}
            height={200}
            className="w-[200px] h-[200px] !w-[200px] !h-[200px]" 
            unoptimized/>
        </Link>
        <div className="flex items-center gap-4">
          <button aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/account" aria-label="Account">
            <User className="w-5 h-5" />
          </Link>
          <Link href="/cart" className="relative">
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}

