import { roundPercentage } from "./roundPercentage"

export const formatCoverageState = (stat: number) => {
  const percentage = roundPercentage(stat * 100)

  const GREEN = "00ff00"
  const RED = "ff0000"
  const ORANGE = "ffaa00"

  let color = GREEN

  if (percentage < 80) {
    color = ORANGE
  }
  if (percentage < 50) {
    color = RED
  }

  return `![${percentage}](https://placehold.it/15/${color}/000000?text=+) ${percentage}%`
}
