import { getCoverageForFile } from "./getCoverageForFile"
import { PluginOptions } from ".."

const getCoverageState = ({ covered, all }: { covered: number; all: number }) => (all > 0 ? covered / all : 1)

export const getFileCoverageStats = (filePath: string, options?: PluginOptions): [number, number] => {
  const fileCoverage = getCoverageForFile(filePath, options)

  if (fileCoverage) {
    const { branches, statements } = fileCoverage
    return [getCoverageState(branches), getCoverageState(statements)]
  }

  return [0, 0]
}
