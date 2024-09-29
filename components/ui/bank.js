"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function BankFwug3D() {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glareX, setGlareX] = useState(50)
  const [glareY, setGlareY] = useState(50)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateXValue = ((y - centerY) / centerY) * 10
      const rotateYValue = ((x - centerX) / centerX) * 10

      setRotateX(-rotateXValue)
      setRotateY(rotateYValue)

      const glareXValue = (x / rect.width) * 100
      const glareYValue = (y / rect.height) * 100
      setGlareX(glareXValue)
      setGlareY(glareYValue)
    }

    const handleMouseLeave = () => {
      setRotateX(0)
      setRotateY(0)
      setGlareX(50)
      setGlareY(50)
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
      <div
        ref={containerRef}
        className="relative xl:w-[600px] h-[257px] rounded-lg overflow-hidden cursor-pointer m-auto mt-20 xl:max-w-[70%] max-w-[95%]"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="w-full h-full"
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <img
            src="/images/image30.jpg"
            alt="Custom One Dollar Bill"
            className="w-full  object-cover"
          />
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              backgroundPosition: `${glareX}% ${glareY}%`,
            }}
          />
        </motion.div>
      </div>
  )
}