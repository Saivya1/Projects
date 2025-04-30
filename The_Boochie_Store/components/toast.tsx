"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface ToastProps {
  message: string
  duration?: number
  onClose: () => void
}

export function Toast({ message, duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-md shadow-lg flex items-center space-x-2">
      <span>{message}</span>
      <button onClick={() => setIsVisible(false)} className="text-white">
        <X size={18} />
      </button>
    </div>
  )
}

