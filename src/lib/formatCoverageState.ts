import { roundPercentage } from "./roundPercentage"

export const formatCoverageState = (stat: number) => {
  const percentage = roundPercentage(stat * 100)
  let color = ""
  if (percentage < 80) {
    color = "🟧"
  } else if (percentage < 50) {
    color = "🟥"
  } else {
    color = "🟩"
  }
  return `${color} ${percentage}%`
}
