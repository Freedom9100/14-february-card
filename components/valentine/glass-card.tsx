import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8",
        className
      )}
    >
      {children}
    </div>
  )
}
