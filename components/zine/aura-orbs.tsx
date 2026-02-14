"use client"

import { motion } from "framer-motion"

export function AuraOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {/* Neon Purple orb */}
      <motion.div
        className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px] animate-orb-float-1"
        style={{ background: "hsl(270, 100%, 65%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      />
      {/* Electric Lime orb */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full opacity-15 blur-[100px] animate-orb-float-2"
        style={{ background: "hsl(80, 100%, 55%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      {/* Soft Peach orb */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[90px] animate-orb-float-3"
        style={{ background: "hsl(20, 80%, 80%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </div>
  )
}
