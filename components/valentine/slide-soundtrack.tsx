"use client"

import { motion } from "framer-motion"
import { Music, Play } from "lucide-react"
import { GlassCard } from "./glass-card"

export function SlideSoundtrack() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex flex-col items-center justify-center h-full px-6"
    >
      <GlassCard className="w-full max-w-sm space-y-6">
        <div className="flex items-center gap-3">
          <Music className="w-8 h-8 text-white" />
          <h2 className="text-2xl font-serif text-white">Саундтрек</h2>
        </div>

        <div className="space-y-6">
          {/* Album Art */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-br from-rose-400 via-pink-300 to-purple-400"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Music className="w-24 h-24 text-white/40" />
            </div>
          </motion.div>

          {/* Track Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center space-y-1"
          >
            <h3 className="text-xl font-serif text-white">
              Pures Gift für mich
            </h3>
            <p className="text-sm text-white/70">BRIDIGUNG</p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-2"
          >
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "45%" }}
                transition={{ delay: 0.8, duration: 2 }}
                className="h-full bg-white/60"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-white/60 font-mono">
              <span>1:23</span>
              <span>3:04</span>
            </div>
          </motion.div>

          {/* Play Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="w-full h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-2xl text-white font-medium transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" fill="currentColor" />
            <span>Саундтрек твоего вайба</span>
          </motion.button>
        </div>
      </GlassCard>
    </motion.div>
  )
}
