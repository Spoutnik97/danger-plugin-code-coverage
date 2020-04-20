import { formatCoverageState } from "../lib/formatCoverageState"
import { getFileCoverageStats } from "./getFileCoverageStats"
import { PluginOptions } from ".."

export const generateMarkdownLineForFileCoverage = (filePath: string, options?: PluginOptions) => {
  const fileCoverage = getFileCoverageStats(filePath, options)
  const filePathWithoutFirstFolder = filePath.slice(filePath.indexOf("/") + 1)

  return [`↦ ${filePathWithoutFirstFolder}`].concat(fileCoverage.map(formatCoverageState))
}
