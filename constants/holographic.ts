import type { HolographicConfig } from "@/types/holographic";

export const DEFAULT_HOLOGRAPHIC_CONFIG: HolographicConfig = {
  hue: 180,
  saturation: 70,
  brightness: 0,
  rotation: 0,
  intensity: 100,
};

export const CARD_DIMENSIONS = {
  width: 320,
  height: 400,
  imageSize: 256,
} as const;

export const ANIMATION_CONFIG = {
  tiltSensitivity: 10,
  transitionDuration: "0.1s",
  perspective: 1000,
} as const;
