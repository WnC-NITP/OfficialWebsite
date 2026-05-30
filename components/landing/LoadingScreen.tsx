"use client"

import React, { useState, useEffect } from "react"
import { SpiderCursor } from "@/components/ui/spider-cursor"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Disable scrolling while loading screen is active
    document.body.style.overflow = "hidden"

    const duration = 2500 // 2.5 seconds loading time
    const intervalTime = 30
    const steps = duration / intervalTime
    const increment = 100 / steps

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + increment
      })
    }, intervalTime)

    return () => {
      clearInterval(timer)
      document.body.style.overflow = "auto"
    }
  }, [])

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsLoaded(true)
        // Allow time for the fade out transition before completely unmounting
        setTimeout(() => {
          setIsVisible(false)
          document.body.style.overflow = "auto"
        }, 800)
      }, 500) // Small pause at 100% before fading out
    }
  }, [progress])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black text-white transition-opacity duration-800 flex flex-col ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 z-0">
        <SpiderCursor />
      </div>

      <div className="relative z-10 flex-1 pointer-events-none" />

      <div className="relative z-10 p-8 md:p-12 flex justify-end items-end pointer-events-none">
        <div className="flex items-baseline text-primary font-bold tracking-tighter">
          <span className="text-6xl md:text-8xl">{Math.round(progress)}</span>
          <span className="text-2xl md:text-4xl ml-1 md:ml-2">%</span>
        </div>
      </div>
    </div>
  )
}
