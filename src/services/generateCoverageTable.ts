import { forEach, groupBy } from "lodash"
import { generateMarkdownLineForFileCoverage } from "./generateMarkdownLineForFileCoverage"
import { PluginOptions } from ".."

export const generateCoverageTable = (files: string[], options?: PluginOptions) => {
  const filesByFolder = groupBy(files, (file: string) => file.split("/")[0])

  const table: string[][] = []

  forEach(filesByFolder, (folderFiles: string[], folderName: string) => {
    table.push([`:file_folder: **${folderName}**`, "", ""])
    forEach(folderFiles, (file: string) => table.push(generateMarkdownLineForFileCoverage(file, options)))
  })

  return table
}
