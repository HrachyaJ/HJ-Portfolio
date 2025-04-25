"use client"

import { ReactNode, useRef } from "react"
import { useScroll, useTransform, motion, MotionValue } from "framer-motion"

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down"
}

export function Parallax({
  children,
  speed = 0.5,
  className = "",
  direction = "up",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const factor = direction === "up" ? -speed * 100 : speed * 100
  
  const y = useTransform(scrollYProgress, [0, 1], [0, factor])
  
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}