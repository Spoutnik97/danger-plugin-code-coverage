import { forEach, groupBy } from "lodash"
import { generateMarkdownLineForFileCoverage } from "./generateMarkdownLineForFileCoverage"

export const generateCoverageTable = (files: string[]) => {
  const filesByFolder = groupBy(files, (file: string) => file.split("/")[0])

  const table: string[][] = []

  forEach(filesByFolder, (folderFiles: string[], folderName: string) => {
    table.push([`:file_folder: **${folderName}**`, "", ""])
    forEach(folderFiles, (file: string) =>
      table.push(generateMarkdownLineForFileCoverage(file)),
    )
  })

  return table
}
