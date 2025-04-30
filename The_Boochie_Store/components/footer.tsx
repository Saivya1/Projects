import Link from "next/link"
import { Facebook, Instagram, PhoneIcon as Whatsapp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-20 bg-[#fce7a0]">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h2 className="font-medium">About Us</h2>
          <p className="text-sm">
            Welcome to The Boochie Store! We&apos;re starting this exciting journey with gratitude, love, and a strong
            commitment to delivering nothing but the best.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-medium">Why Choose Us?</h2>
          <p className="text-sm">
            Our T-shirts are made from the finest materials, ensuring a premium feel. These are crafted with 100%
            bio-washed cotton, giving them a perfectly seamless feel.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-medium">Policies</h2>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/terms" className="hover:underline">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:underline">
                Return Policy
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:underline">
                Shipping Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="font-medium">Contact Us</h2>
          <p className="text-sm">Email: hello@theboochie.com</p>
          <p className="text-sm">WhatsApp: +91 9555555555</p>
          <h2 className="font-medium">Connect With Us</h2>
          <div className="flex space-x-4">
            <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <Whatsapp className="w-6 h-6" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

