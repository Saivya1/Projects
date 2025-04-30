import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OrderConfirmationPage() {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-4">
      <h1 className="text-2xl font-bold">Thank you for your order!</h1>
      <p>Your order has been successfully placed. We&apos;ll send you an email with the order details shortly.</p>
      <Button asChild>
        <Link href="/">Continue Shopping</Link>
      </Button>
    </div>
  )
}

