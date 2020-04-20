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

/**
 * Danger.JS plugin to display the code coverage on a pull request by commenting it via the CI
 */
export default function codeCoverage() {
  const filterFiles = (file: string) => {
    if (file.includes(".test.") || file.includes(".snap")) { return false }
    return true
  }

  const coverageTable = [["File", "Branches", "Statements"]]
    .concat([[], [":heavy_plus_sign: **NEW FILES**"], []])
    .concat(generateCoverageTable(danger.git.created_files.filter(filterFiles)))
    .concat([[], [":pencil2: **MODIFIED FILES**"], []])
    .concat(generateCoverageTable(danger.git.modified_files.filter(filterFiles)))

  message(
    `# Coverage

        ${generateMarkdownTable(coverageTable)}`,
  )
}
