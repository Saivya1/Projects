import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/context/cart-context"
import Banner from "@/components/banner"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Boochie Store",
  description: "Luxury 90s Cool Feel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fce7a0]`}>
        <CartProvider>
          <Banner />
          <Header />
          <main className="min-h-screen px-4 py-8 max-w-7xl mx-auto">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

