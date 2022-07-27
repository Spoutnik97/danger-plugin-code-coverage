import { roundPercentage } from "./roundPercentage"

export const formatCoverageState = (stat: number) => {
  const percentage = roundPercentage(stat * 100)
  if (percentage < 80) {
    return "🟧"
  } else if (percentage < 50) {
    return "🟥"
  } else {
    return "🟩"
  }
}
