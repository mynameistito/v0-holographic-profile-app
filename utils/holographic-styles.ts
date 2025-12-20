import type { HolographicConfig, MousePosition } from "@/types/holographic";

export function createHolographicStyle(
  config: HolographicConfig,
  mousePos: MousePosition
) {
  const { hue, saturation, brightness, rotation, intensity } = config;

  return {
    backgroundImage: `
      linear-gradient(
        ${rotation + (mousePos.x - 0.5) * 45}deg,
        hsl(${(hue + mousePos.x * 60) % 360}, ${saturation}%, ${brightness}%) 0%,
        hsl(${(hue + 60 + mousePos.y * 30) % 360}, ${saturation}%, ${brightness}%) 16.66%,
        hsl(${(hue + 120 + mousePos.x * 40) % 360}, ${saturation}%, ${brightness}%) 33.33%,
        hsl(${(hue + 180 + mousePos.y * 50) % 360}, ${saturation}%, ${brightness}%) 50%,
        hsl(${(hue + 240 + mousePos.x * 35) % 360}, ${saturation}%, ${brightness}%) 66.66%,
        hsl(${(hue + 300 + mousePos.y * 45) % 360}, ${saturation}%, ${brightness}%) 83.33%,
        hsl(${(hue + mousePos.x * 60) % 360}, ${saturation}%, ${brightness}%) 100%
      ),
      radial-gradient(
        ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 50%
      )
    `,
    backgroundSize: "200% 200%, 100% 100%",
    opacity: intensity / 100,
  };
}

export function createHolographicMask(mousePos: MousePosition) {
  return {
    background: `
      linear-gradient(
        ${45 + mousePos.x * 90}deg,
        transparent ${Math.max(0, (mousePos.x - 0.3) * 100)}%,
        rgba(255, 0, 150, 0.8) ${mousePos.x * 100}%,
        rgba(0, 255, 255, 0.6) ${(mousePos.x + 0.1) * 100}%,
        rgba(255, 255, 0, 0.7) ${(mousePos.x + 0.2) * 100}%,
        rgba(150, 0, 255, 0.5) ${(mousePos.x + 0.3) * 100}%,
        transparent ${Math.min(100, (mousePos.x + 0.4) * 100)}%
      ),
      linear-gradient(
        ${135 + mousePos.y * 90}deg,
        transparent ${Math.max(0, (mousePos.y - 0.2) * 100)}%,
        rgba(0, 255, 150, 0.4) ${mousePos.y * 100}%,
        rgba(255, 100, 0, 0.6) ${(mousePos.y + 0.15) * 100}%,
        transparent ${Math.min(100, (mousePos.y + 0.3) * 100)}%
      ),
      radial-gradient(
        ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(255, 255, 255, 0.1) 30%,
        transparent 70%
      )
    `,
    maskImage: `
      linear-gradient(
        ${mousePos.x * 180}deg,
        transparent 0%,
        black ${mousePos.x * 30}%,
        black ${70 + mousePos.y * 20}%,
        transparent 100%
      )
    `,
    WebkitMaskImage: `
      linear-gradient(
        ${mousePos.x * 180}deg,
        transparent 0%,
        black ${mousePos.x * 30}%,
        black ${70 + mousePos.y * 20}%,
        transparent 100%
      )
    `,
    mixBlendMode: "screen" as const,
  };
}

export function createPrismaticEffect(mousePos: MousePosition) {
  return {
    background: `
      conic-gradient(
        from ${mousePos.x * 360}deg at ${mousePos.x * 100}% ${mousePos.y * 100}%,
        transparent 0deg,
        rgba(255, 0, 0, 0.3) ${mousePos.x * 60}deg,
        rgba(255, 255, 0, 0.3) ${mousePos.x * 120}deg,
        rgba(0, 255, 0, 0.3) ${mousePos.x * 180}deg,
        rgba(0, 255, 255, 0.3) ${mousePos.x * 240}deg,
        rgba(0, 0, 255, 0.3) ${mousePos.x * 300}deg,
        rgba(255, 0, 255, 0.3) ${mousePos.x * 360}deg,
        transparent 360deg
      )
    `,
    opacity: 0.6,
    mixBlendMode: "color-dodge" as const,
  };
}

export function createTiledCodeMask(mousePos: MousePosition) {
  return {
    background: `
      linear-gradient(
        ${45 + mousePos.x * 90}deg,
        transparent ${Math.max(0, (mousePos.x - 0.3) * 100)}%,
        rgba(255, 0, 150, 0.8) ${mousePos.x * 100}%,
        rgba(0, 255, 255, 0.6) ${(mousePos.x + 0.1) * 100}%,
        rgba(255, 255, 0, 0.7) ${(mousePos.x + 0.2) * 100}%,
        rgba(150, 0, 255, 0.5) ${(mousePos.x + 0.3) * 100}%,
        transparent ${Math.min(100, (mousePos.x + 0.4) * 100)}%
      ),
      linear-gradient(
        ${135 + mousePos.y * 90}deg,
        transparent ${Math.max(0, (mousePos.y - 0.2) * 100)}%,
        rgba(0, 255, 150, 0.4) ${mousePos.y * 100}%,
        rgba(255, 100, 0, 0.6) ${(mousePos.y + 0.15) * 100}%,
        transparent ${Math.min(100, (mousePos.y + 0.3) * 100)}%
      ),
      radial-gradient(
        ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(255, 255, 255, 0.1) 30%,
        transparent 70%
      )
    `,
    maskImage: `
      repeating-linear-gradient(
        45deg,
        transparent 0px,
        transparent 15px,
        black 15px,
        black 25px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent 0px,
        transparent 15px,
        black 15px,
        black 25px
      )
    `,
    WebkitMaskImage: `
      repeating-linear-gradient(
        45deg,
        transparent 0px,
        transparent 15px,
        black 15px,
        black 25px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent 0px,
        transparent 15px,
        black 15px,
        black 25px
      )
    `,
    maskComposite: "intersect" as const,
    WebkitMaskComposite: "source-in" as const,
    mixBlendMode: "screen" as const,
    opacity: 0.1,
  };
}
