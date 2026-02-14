"use client"

import { motion } from "framer-motion"
import { useCallback, useState } from "react"
import confetti from "canvas-confetti"

export function SlideFinal() {
  const [fired, setFired] = useState(false)

  const fireConfetti = useCallback(() => {
    if (fired) return
    setFired(true)

    const duration = 3000
    const end = Date.now() + duration

    const colors = ["#a855f7", "#84cc16", "#f5c8a8", "#ffffff"]

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()

    // Big burst
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors,
    })
  }, [fired])

  return (
    <motion.div
      className="flex h-dvh w-full flex-col items-center justify-center gap-6 px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Glowing aura */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <div className="h-[350px] w-[350px] rounded-full bg-soft-peach/10 blur-[120px]" />
      </div>

      <motion.h1
        className="relative z-10 font-serif text-5xl font-bold italic tracking-tight text-foreground sm:text-7xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {"Ты крутая."}
      </motion.h1>

      <motion.p
        className="relative z-10 max-w-xs font-mono text-sm leading-relaxed tracking-wider text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {"Рад, что мы на одной волне. С тобой никогда не бывает скучно."}
      </motion.p>

      <motion.span
        className="relative z-10 mt-2 font-mono text-xs tracking-widest text-soft-peach/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        {"Happy February 14th \u2728"}
      </motion.span>

      <motion.button
        onClick={fireConfetti}
        className="relative z-[60] mt-6 rounded-full border border-soft-peach/30 bg-soft-peach/10 px-8 py-3 font-mono text-sm tracking-widest text-soft-peach transition-colors hover:bg-soft-peach/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.4 }}
        whileTap={{ scale: 0.95 }}
      >
        {fired ? "Подарок забран \u2728" : "Забрать подарок \uD83C\uDF81"}
      </motion.button>
    </motion.div>
  )
}
