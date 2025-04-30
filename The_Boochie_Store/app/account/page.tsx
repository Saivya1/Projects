"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically integrate with a backend service
    if (isLogin) {
      alert("Logged in successfully!")
    } else {
      alert("Account created successfully!")
    }
  }

  return (
    <div className="max-w-md mx-auto space-y-8">
      <h1 className="text-2xl font-bold">{isLogin ? "Login" : "Create Account"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Shipping Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </>
        )}
        <Button type="submit" className="w-full">
          {isLogin ? "Login" : "Create Account"}
        </Button>
      </form>
      <p className="text-center">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button className="text-blue-600 underline" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </p>
    </div>
  )
}

