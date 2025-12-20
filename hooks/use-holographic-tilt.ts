"use client"

import type React from "react"

import { useState, useCallback, useRef } from "react"
import type { MousePosition, TiltState } from "@/types/holographic"
import { ANIMATION_CONFIG } from "@/constants/holographic"

export function useHolographicTilt() {
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 })
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0.5, y: 0.5 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = event.clientX
    const mouseY = event.clientY

    const rotateX = (mouseY - centerY) / ANIMATION_CONFIG.tiltSensitivity
    const rotateY = (centerX - mouseX) / ANIMATION_CONFIG.tiltSensitivity

    const normalizedX = (mouseX - rect.left) / rect.width
    const normalizedY = (mouseY - rect.top) / rect.height

    setTilt({ x: rotateX, y: rotateY })
    setMousePos({ x: normalizedX, y: normalizedY })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 })
    setMousePos({ x: 0.5, y: 0.5 })
  }, [])

  return {
    tilt,
    mousePos,
    cardRef,
    handleMouseMove,
    handleMouseLeave,
  }
}
