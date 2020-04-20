import { getCoverageForFile } from "./getCoverageForFile"

const getCoverageState = ({ covered, all }: { covered: number; all: number }) =>
  all > 0 ? covered / all : 1

export const getFileCoverageStats = (filePath: string): [number, number] => {
  const fileCoverage = getCoverageForFile(filePath)

  if (fileCoverage) {
    const { branches, statements } = fileCoverage
    return [getCoverageState(branches), getCoverageState(statements)]
  }

  return [0, 0]
}
