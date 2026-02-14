"use client"

import { useState, useCallback, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { GrainOverlay } from "@/components/zine/grain-overlay"
import { AuraOrbs } from "@/components/zine/aura-orbs"
import { SlideLoader } from "@/components/zine/slide-loader"
import { SlideIntro } from "@/components/zine/slide-intro"
import { SlideData } from "@/components/zine/slide-data"
import { SlideSoundtrack } from "@/components/zine/slide-soundtrack"
import { SlideFinal } from "@/components/zine/slide-final"

export default function ZinePage() {
  const [slide, setSlide] = useState(0)

  const next = useCallback(() => {
    setSlide((s) => Math.min(s + 1, 4))
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        next()
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [next])

  return (
    <main className="relative min-h-dvh overflow-hidden bg-background">
      <AuraOrbs />
      <GrainOverlay />

      <AnimatePresence mode="wait">
        {slide === 0 && <SlideLoader key="loader" onComplete={next} />}
        {slide === 1 && <SlideIntro key="intro" onNext={next} />}
        {slide === 2 && <SlideData key="data" onNext={next} />}
        {slide === 3 && <SlideSoundtrack key="soundtrack" onNext={next} />}
        {slide === 4 && <SlideFinal key="final" />}
      </AnimatePresence>

      {slide > 0 && (
        <div
          className="fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 gap-2"
          role="progressbar"
          aria-valuenow={slide}
          aria-valuemin={1}
          aria-valuemax={4}
          aria-label="Slide progress"
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                i <= slide ? "w-6 bg-foreground/60" : "w-1 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      )}
    </main>
  )
}
