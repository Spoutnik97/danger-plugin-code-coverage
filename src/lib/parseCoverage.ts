function generateEmptyReport() {
  return {
    covered: 0,
    all: 0,
  }
}

export const parseCoverage = (json: JSON) => {
  const paths = Object.keys(json)

  return paths.map(path => {
    const coverage = json[path]

    const branches = generateEmptyReport()
    const statements = generateEmptyReport()
    const functions = generateEmptyReport()

    const branchIds = Object.keys(coverage.b)
    branchIds.forEach(id => {
      const result = coverage.b[id]
      result.forEach(r => {
        branches.covered += r > 0 ? 1 : 0
        branches.all += 1
      })
    })

    const statementIds = Object.keys(coverage.s)
    statementIds.forEach(id => {
      statements.covered += coverage.s[id] > 0 ? 1 : 0
      statements.all += 1
    })

    const functionIds = Object.keys(coverage.f)
    functionIds.forEach(id => {
      functions.covered += coverage.f[id] > 0 ? 1 : 0
      functions.all += 1
    })

    // We don't return line coverage because it's no longer relevant
    // https://github.com/gotwarlost/istanbul/issues/639
    return {
      path,
      branches,
      statements,
      functions,
    }
  })
}
