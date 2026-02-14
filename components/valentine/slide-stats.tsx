"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import { GlassCard } from "./glass-card"

const stats = [
  { label: "Уровень стиля", value: 100, color: "bg-pink-400" },
  { label: "Опасность для сердец", value: 110, color: "bg-rose-500" },
  { label: "Харизма", value: 100, color: "bg-purple-400" },
]

export function SlideStats() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex flex-col items-center justify-center h-full px-6"
    >
      <GlassCard className="w-full max-w-sm space-y-6">
        <div className="flex items-center gap-3">
          <Zap className="w-8 h-8 text-white" fill="currentColor" />
          <h2 className="text-2xl font-serif text-white">Статистика:</h2>
        </div>

        <div className="space-y-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between text-white/90">
                <span className="text-sm">{stat.label}</span>
                <span className="text-sm font-mono">{stat.value}%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(stat.value, 100)}%` }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 1 }}
                  className={`h-full ${stat.color}`}
                />
              </div>
              {stat.value > 100 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 1.3 }}
                  className="text-xs text-rose-300 font-mono"
                >
                  ⚠ Превышен лимит
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  )
}
