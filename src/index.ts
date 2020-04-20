// Provides dev-time type structures for  `danger` - doesn't affect runtime.
// @ts-ignore
import * as generateMarkdownTable from "markdown-table"
import { DangerDSLType } from "../node_modules/danger/distribution/dsl/DangerDSL"
import { generateCoverageTable } from "./services/generateCoverageTable"

declare var danger: DangerDSLType
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void
export declare function markdown(message: string): void

export interface PluginOptions {
  title: string
  ignoreCoveragePattern: string[]
  coverageFilesPath: string
}

export const defaultPluginOptions: PluginOptions[] = [
  {
    title: "# Coverage",
    ignoreCoveragePattern: [".test.", ".snap"],
    coverageFilesPath: "coverage/coverage-final.json",
  },
]
/**
 * Danger.JS plugin to display the code coverage on a pull request by commenting it via the CI
 */
export function codeCoverage(pluginOptions: PluginOptions[] = defaultPluginOptions) {
  pluginOptions.forEach(options => {
    const filterFiles = (file: string) => {
      let isFileDisplayed = true
      options.ignoreCoveragePattern.forEach(pattern => {
        if (file.includes(pattern)) {
          isFileDisplayed = false
        }
      })
      return isFileDisplayed
    }

    const coverageTable = [["File", "Branches", "Statements"]]
      .concat([[], [":heavy_plus_sign: **NEW FILES**"], []])
      .concat(generateCoverageTable(danger.git.created_files.filter(filterFiles), options))
      .concat([[], [":pencil2: **MODIFIED FILES**"], []])
      .concat(generateCoverageTable(danger.git.modified_files.filter(filterFiles), options))

    message(
      `${options.title}
       ${generateMarkdownTable(coverageTable)}`
    )
  })
}
