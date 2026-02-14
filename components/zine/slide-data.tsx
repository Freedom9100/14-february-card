"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface SlideDataProps {
  onNext: () => void
}

const bars = [
  {
    label: "Уровень сарказма",
    target: 110,
    color: "hsl(270, 100%, 65%)",
    overflow: true,
    note: null,
  },
  {
    label: "Чувство стиля",
    target: 100,
    color: "hsl(80, 100%, 55%)",
    overflow: false,
    note: "Illegal Level",
  },
  {
    label: "Способность вдохновлять",
    target: 100,
    color: "hsl(20, 80%, 80%)",
    overflow: false,
    note: null,
  },
]

export function SlideData({ onNext }: SlideDataProps) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="flex h-dvh w-full flex-col items-center justify-center gap-10 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
      onClick={onNext}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onNext()}
      aria-label="Next slide"
    >
      <motion.h2
        className="font-serif text-3xl font-bold italic tracking-tight text-foreground sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {"Анализ личности:"}
      </motion.h2>

      <div className="flex w-full max-w-sm flex-col gap-8">
        {bars.map((bar, i) => (
          <motion.div
            key={bar.label}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.3 }}
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-mono text-xs tracking-wider text-muted-foreground">
                {bar.label}
              </span>
              <span className="font-mono text-xs font-bold" style={{ color: bar.color }}>
                {animate ? `${bar.target}%` : "0%"}
              </span>
            </div>
            <div className="relative h-2 w-full overflow-visible rounded-full bg-muted">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{ background: bar.color }}
                initial={{ width: "0%" }}
                animate={animate ? { width: `${Math.min(bar.target, 100)}%` } : {}}
                transition={{ duration: 1.5, delay: 0.6 + i * 0.3, ease: "easeOut" }}
              />
              {bar.overflow && (
                <motion.div
                  className="absolute right-0 top-0 h-full rounded-full"
                  style={{ background: bar.color, filter: "ghtness(1.3)" }}
                  initial={{ width: "0%", right: "0%" }}
                  animate={
                    animate
                      ? {
                          width: "10%",
                          right: "-10%",
                        }
                      : {}
                  }
                  transition={{ duration: 0.8, delay: 2 + i * 0.3, ease: "easeOut" }}
                />
              )}
            </div>
            {bar.note && (
              <motion.span
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric-lime"
                initial={{ opacity: 0 }}
                animate={animate ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 2.2 + i * 0.3 }}
              >
                {bar.note}
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.p
        className="font-mono text-[10px] tracking-wider text-muted-foreground/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        {"Источник данных: Мои наблюдения."}
      </motion.p>
    </motion.div>
  )
}
