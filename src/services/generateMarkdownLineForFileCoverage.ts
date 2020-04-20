import { formatCoverageState } from "../lib/formatCoverageState"
import { getFileCoverageStats } from "./getFileCoverageStats"

export const generateMarkdownLineForFileCoverage = (filePath: string) => {
  const fileCoverage = getFileCoverageStats(filePath)
  const filePathWithoutFirstFolder = filePath.slice(filePath.indexOf("/") + 1)

  return [`↦ ${filePathWithoutFirstFolder}`].concat(
    fileCoverage.map(formatCoverageState),
  )
}
