"use client"

import type { HolographicConfig } from "@/types/holographic"
import { useHolographicTilt } from "@/hooks/use-holographic-tilt"
import {
  createHolographicStyle,
  createHolographicMask,
  createPrismaticEffect,
  createTiledCodeMask,
} from "@/utils/holographic-styles"
import { CARD_DIMENSIONS, ANIMATION_CONFIG } from "@/constants/holographic"

interface HolographicCardProps {
  image: string
  config: HolographicConfig
  title?: string
  isDownloading?: boolean
}

export function HolographicCard({
  image,
  config,
  title = "Profile Card",
  isDownloading = false,
}: HolographicCardProps) {
  const { tilt, mousePos, cardRef, handleMouseMove, handleMouseLeave } = useHolographicTilt()

  const effectiveMousePos = isDownloading ? { x: 0.55, y: 0.45 } : mousePos

  const holographicStyle = createHolographicStyle(config, effectiveMousePos)
  const holographicMask = createHolographicMask(effectiveMousePos)
  const prismaticEffect = createPrismaticEffect(effectiveMousePos)
  const tiledCodeMask = createTiledCodeMask(effectiveMousePos)

  const cardTransform = isDownloading
    ? { transform: "none" }
    : {
        transform: `perspective(${ANIMATION_CONFIG.perspective}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: `transform ${ANIMATION_CONFIG.transitionDuration} ease-out`,
      }

  return (
    <div
      ref={cardRef}
      className="relative cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={cardTransform}
    >
      <div className="absolute inset-0 rounded-2xl blur-sm opacity-95" style={holographicStyle} />

      <div className="relative rounded-2xl p-1 backdrop-blur-sm" style={holographicStyle}>
        <div className="absolute inset-0 rounded-xl opacity-90" style={holographicMask} />
        <div className="absolute inset-0 rounded-xl opacity-85" style={prismaticEffect} />

        <div className="bg-slate-900/80 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-xl" />

          <div className="absolute inset-0 rounded-xl overflow-hidden z-5 opacity-75">
            <div className="absolute inset-0" style={tiledCodeMask} />
          </div>

          <img
            src={image || "/placeholder.svg"}
            alt="Profile"
            className={`w-${CARD_DIMENSIONS.imageSize / 4} h-${CARD_DIMENSIONS.imageSize / 4} object-cover rounded-xl mx-auto shadow-2xl relative z-10`}
          />

          <div className="mt-4 text-center relative z-10">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-slate-300 text-sm mt-1">Holographic Edition</p>
          </div>
        </div>
      </div>
    </div>
  )
}
