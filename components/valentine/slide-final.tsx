"use client"

import { motion } from "framer-motion"
import { Gift } from "lucide-react"
import { GlassCard } from "./glass-card"
import confetti from "canvas-confetti"

export function SlideFinal() {
  const handleConfetti = () => {
    const count = 200
    const defaults = {
      origin: { y: 0.7 },
      shapes: ["circle", "square"],
      colors: ["#be123c", "#fda4af", "#ffffff", "#fbbf24"],
    }

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      })
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    })

    fire(0.2, {
      spread: 60,
    })

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    })

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    })

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    })

    // Heart-shaped confetti
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ["#be123c", "#fda4af"],
        shapes: ["circle"],
        scalar: 1.5,
      })
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ["#be123c", "#fda4af"],
        shapes: ["circle"],
        scalar: 1.5,
      })
    }, 200)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex flex-col items-center justify-center h-full px-6"
    >
      <GlassCard className="w-full max-w-sm text-center space-y-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="flex justify-center"
        >
          <Gift className="w-16 h-16 text-white" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-serif text-white"
        >
          С 14 февраля!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-white/90"
        >
          Оставайся такой же крутой и настоящей.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          onClick={handleConfetti}
          className="w-full h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-2xl text-white font-medium transition-all animate-pulse"
        >
          Получить открытку 💌
        </motion.button>
      </GlassCard>
    </motion.div>
  )
}
