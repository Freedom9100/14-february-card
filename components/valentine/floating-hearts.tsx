"use client"

import { Heart } from "lucide-react"

export function FloatingHearts() {
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
    duration: `${15 + Math.random() * 10}s`,
    size: 16 + Math.random() * 24,
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-white/10"
          style={{
            left: heart.left,
            width: heart.size,
            height: heart.size,
            animation: `float-up ${heart.duration} linear infinite`,
            animationDelay: heart.delay,
          }}
          fill="currentColor"
        />
      ))}
    </div>
  )
}
