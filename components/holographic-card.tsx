"use client";

import Image from "next/image";
import { type Ref, useCallback } from "react";
import { ANIMATION_CONFIG, CARD_DIMENSIONS } from "@/constants/holographic";
import { useHolographicTilt } from "@/hooks/use-holographic-tilt";
import type { HolographicConfig } from "@/types/holographic";
import {
  createHolographicMask,
  createHolographicStyle,
  createPrismaticEffect,
  createTiledCodeMask,
} from "@/utils/holographic-styles";

type HolographicCardProps = {
  image: string;
  config: HolographicConfig;
  title?: string;
  isDownloading?: boolean;
  ref?: Ref<HTMLElement>;
};

export function HolographicCard({
  image,
  config,
  title = "Profile Card",
  isDownloading = false,
  ref: forwardedRef,
}: HolographicCardProps) {
  const { tilt, mousePos, cardRef, handleMouseMove, handleMouseLeave } =
    useHolographicTilt();

  const effectiveMousePos = isDownloading ? { x: 0.55, y: 0.45 } : mousePos;

  const holographicStyle = createHolographicStyle(config, effectiveMousePos);
  const holographicMask = createHolographicMask(effectiveMousePos);
  const prismaticEffect = createPrismaticEffect(effectiveMousePos);
  const tiledCodeMask = createTiledCodeMask(effectiveMousePos);

  const cardTransform = isDownloading
    ? {
        transform: `perspective(${ANIMATION_CONFIG.perspective}px) rotateX(-10deg) rotateY(10deg)`,
      }
    : {
        transform: `perspective(${ANIMATION_CONFIG.perspective}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: `transform ${ANIMATION_CONFIG.transitionDuration} ease-out`,
      };

  // Combine refs: forward to both the forwardedRef and the internal cardRef
  const refCallback = useCallback(
    (node: HTMLElement | null) => {
      // Handle forwarded ref
      if (forwardedRef) {
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else {
          forwardedRef.current = node;
        }
      }
      // Handle internal cardRef from hook (it's a RefObject, so just assign to current)
      if (cardRef) {
        cardRef.current = node;
      }
    },
    [forwardedRef, cardRef]
  );

  return (
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: Visual effect only
    <section
      aria-label={`Holographic card for ${title}`}
      className="relative cursor-pointer"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={refCallback}
      style={cardTransform}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-95 blur-sm"
        style={holographicStyle}
      />

      <div
        className="relative rounded-2xl p-1 backdrop-blur-sm"
        style={holographicStyle}
      >
        <div
          className="absolute inset-0 rounded-xl opacity-90"
          style={holographicMask}
        />
        <div
          className="absolute inset-0 rounded-xl opacity-85"
          style={prismaticEffect}
        />

        <div className="relative overflow-hidden rounded-xl bg-slate-900/80 p-6">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-transparent" />

          <div className="absolute inset-0 z-5 overflow-hidden rounded-xl opacity-75">
            <div className="absolute inset-0" style={tiledCodeMask} />
          </div>

          <Image
            alt="Profile"
            className={`w-${CARD_DIMENSIONS.imageSize / 4} h-${CARD_DIMENSIONS.imageSize / 4} relative z-10 mx-auto rounded-xl object-cover shadow-2xl`}
            data-profile-image="true"
            height={256}
            src={image || "/placeholder.svg"}
            width={256}
          />

          <div className="relative z-10 mt-4 text-center">
            <h3 className="font-bold text-white text-xl">{title}</h3>
            <p className="mt-1 text-slate-300 text-sm">Holographic Edition</p>
          </div>
        </div>
      </div>
    </section>
  );
}
