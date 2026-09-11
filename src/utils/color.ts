export function hashHue(seed: string): number {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash) % 360
}

export function swatch(seed: string): string {
  const hue = hashHue(seed)
  return `linear-gradient(155deg, hsl(${hue} 55% 45%), hsl(${(hue + 40) % 360} 45% 30%))`
}
