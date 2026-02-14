"use client"

import { motion } from "framer-motion"

interface SlideSoundtrackProps {
  onNext: () => void
}

function WaveformBars() {
  return (
    <div className="flex items-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: 32 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-electric-lime"
          initial={{ height: 4 }}
          animate={{ height: [4, Math.random() * 28 + 4, 4] }}
          transition={{
            duration: 0.8 + Math.random() * 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export function SlideSoundtrack({ onNext }: SlideSoundtrackProps) {
  return (
    <motion.div
      className="flex h-dvh w-full flex-col items-center justify-center gap-8 px-6 text-center"
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
      {/* Vinyl record */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative h-48 w-48 rounded-full border border-muted bg-card sm:h-56 sm:w-56">
          {/* Grooves */}
          <div className="absolute inset-4 rounded-full border border-muted-foreground/10" />
          <div className="absolute inset-8 rounded-full border border-muted-foreground/10" />
          <div className="absolute inset-12 rounded-full border border-muted-foreground/10" />
          <div className="absolute inset-16 rounded-full border border-muted-foreground/10" />
          {/* Center label */}
          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-neon-purple/20 sm:h-20 sm:w-20">
            <div className="h-3 w-3 rounded-full bg-neon-purple" />
          </div>
          {/* Spinning overlay */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0%, hsl(270, 100%, 65%, 0.05) 25%, transparent 50%, hsl(270, 100%, 65%, 0.03) 75%, transparent 100%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.p
        className="max-w-xs font-mono text-xs leading-relaxed tracking-wider text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {"Если бы ты была треком, ты бы звучала так:"}
      </motion.p>

      {/* Waveform */}
      <motion.div
        className="flex h-10 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <WaveformBars />
      </motion.div>

      {/* Track info */}
      <motion.div
        className="flex flex-col gap-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <span className="font-serif text-xl italic text-foreground sm:text-2xl">
          {"The Main Character Energy"}
        </span>
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          {"Katya's Vibe"}
        </span>
      </motion.div>

      {/* Play button (visual only) */}
      <motion.div
        className="flex h-12 w-12 items-center justify-center rounded-full border border-electric-lime/30 bg-electric-lime/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        aria-hidden="true"
      >
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
          <path d="M2 1L14 9L2 17V1Z" fill="hsl(80, 100%, 55%)" />
        </svg>
      </motion.div>
    </motion.div>
  )
}
