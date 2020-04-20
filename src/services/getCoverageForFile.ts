import { keyBy } from "lodash"
import * as path from "path"
import { parseCoverage } from "../lib/parseCoverage"
import { PluginOptions } from ".."

const rootDir = process.cwd()

const getFileAbsolutePath = (filePath: string): string => path.join(rootDir, filePath)

export const getCoverageForFile = (filePath: string, options?: PluginOptions) => {
  const coverageFilePath = getFileAbsolutePath((options && options.coverageFilesPath) || "coverage/coverage-final.json")

  const coverageJson = require(coverageFilePath)

  const coverages = parseCoverage(coverageJson)

  const coverageByPath = keyBy(coverages, (coverage: { path: string }) => coverage.path)

  return coverageByPath[getFileAbsolutePath(filePath)]
}
