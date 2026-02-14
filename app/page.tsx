"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { FloatingHearts } from "@/components/valentine/floating-hearts"
import { SlideLoader } from "@/components/valentine/slide-loader"
import { SlideIntro } from "@/components/valentine/slide-intro"
import { SlideStats } from "@/components/valentine/slide-stats"
import { SlideSoundtrack } from "@/components/valentine/slide-soundtrack"
import { SlideFinal } from "@/components/valentine/slide-final"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ValentinePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === " ") {
      handleNext()
    } else if (e.key === "ArrowLeft") {
      handlePrev()
    }
  }

  return (
    <main
      className="relative h-[100dvh] w-full overflow-hidden animated-gradient"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <FloatingHearts />

      <div className="relative z-10 h-full max-w-md mx-auto">
        <AnimatePresence mode="wait">
          {currentSlide === 0 && (
            <SlideLoader
              key="loader"
              onComplete={() => setCurrentSlide(1)}
            />
          )}
          {currentSlide === 1 && (
            <SlideIntro key="intro" onNext={handleNext} />
          )}
          {currentSlide === 2 && <SlideStats key="stats" />}
          {currentSlide === 3 && <SlideSoundtrack key="soundtrack" />}
          {currentSlide === 4 && <SlideFinal key="final" />}
        </AnimatePresence>
      </div>

      {/* Navigation - Only show after loader */}
      {currentSlide > 0 && (
        <div className="fixed bottom-12 left-0 right-0 z-20">
          <div className="max-w-md mx-auto px-6">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentSlide === 1}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-white/30"
                aria-label="Назад"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Progress dots */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSlides - 1 }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i + 1)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === i + 1
                        ? "w-8 bg-white"
                        : "w-2 bg-white/40"
                    }`}
                    aria-label={`Перейти к слайду ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentSlide === totalSlides - 1}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-white/30"
                aria-label="Далее"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
