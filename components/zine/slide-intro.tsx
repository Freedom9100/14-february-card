"use client"

import { motion } from "framer-motion"

interface SlideIntroProps {
  onNext: () => void
}

export function SlideIntro({ onNext }: SlideIntroProps) {
  return (
    <motion.div
      className="flex h-dvh w-full flex-col items-center justify-center gap-6 px-6 text-center"
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
      {/* Glowing aura center */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <div className="h-[300px] w-[300px] rounded-full bg-neon-purple/10 blur-[100px]" />
      </div>

      <motion.h1
        className="relative z-10 font-serif text-6xl font-bold italic tracking-tight text-foreground sm:text-7xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {"Привет, Катя"}
      </motion.h1>

      <motion.p
        className="relative z-10 font-mono text-sm tracking-wider text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {"Это не валентинка."}
      </motion.p>

      <motion.p
        className="relative z-10 max-w-xs font-mono text-sm leading-relaxed tracking-wider text-soft-peach"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        {"Это напоминание о том, почему ты\u00A0\u2014\u00A0топ."}
      </motion.p>

      <motion.span
        className="relative z-10 mt-8 font-mono text-xs tracking-widest text-muted-foreground/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        {"tap anywhere"}
      </motion.span>
    </motion.div>
  )
}
