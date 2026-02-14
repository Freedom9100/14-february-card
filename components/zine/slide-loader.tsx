"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const loadingSteps = [
  "Инициализация...",
  "Загрузка харизмы...",
  "Готово.",
]

interface SlideLoaderProps {
  onComplete: () => void
}

export function SlideLoader({ onComplete }: SlideLoaderProps) {
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stepTimers = [
      setTimeout(() => setStep(1), 1200),
      setTimeout(() => setStep(2), 2800),
      setTimeout(() => setReady(true), 3800),
    ]
    return () => stepTimers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1.5
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="flex h-dvh w-full flex-col items-center justify-center gap-10 px-6"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      {/* Spinning star */}
      <motion.div
        className="animate-spin-slow"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          className="text-neon-purple"
        >
          <path
            d="M24 0L27.5 20.5L48 24L27.5 27.5L24 48L20.5 27.5L0 24L20.5 20.5L24 0Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Loading bar */}
      <div className="w-full max-w-xs">
        <div className="h-[2px] w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-neon-purple"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Step text */}
      <div className="h-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            className="font-mono text-sm tracking-wider text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {loadingSteps[step]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* CTA button */}
      <AnimatePresence>
        {ready && (
          <motion.button
            onClick={onComplete}
            className="rounded-full border border-neon-purple/30 bg-neon-purple/10 px-8 py-3 font-mono text-sm tracking-widest text-neon-purple transition-colors hover:bg-neon-purple/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {"Открыть доступ \uD83D\uDD13"}
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
