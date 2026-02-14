"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"

export function SlideLoader({ onComplete }: { onComplete: () => void }) {
  const [statusIndex, setStatusIndex] = useState(0)
  const statuses = [
    "Связь со спутником...",
    "Настройка частоты...",
    "Готово.",
  ]

  useEffect(() => {
    const intervals = [1500, 1500, 1000]
    const timer = setTimeout(() => {
      if (statusIndex < statuses.length - 1) {
        setStatusIndex(statusIndex + 1)
      } else {
        setTimeout(onComplete, 800)
      }
    }, intervals[statusIndex])

    return () => clearTimeout(timer)
  }, [statusIndex, onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-full gap-8"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="w-16 h-16 text-white" fill="currentColor" />
      </motion.div>
      <motion.p
        key={statusIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg text-white/90 font-mono"
      >
        {statuses[statusIndex]}
      </motion.p>
    </motion.div>
  )
}
