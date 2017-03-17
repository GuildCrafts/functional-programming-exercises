const sampleGrid = [
    [9, 8, 7],
    [5, 3, 2],
    [6, 6, 7]
]
const LENGTH = sampleGrid.length

lessThanColumn = (grid, coordinate) => {
    const x = coordinate[0]
    const y = coordinate[1]
    for (let i = 0; i < LENGTH; i++) {
        console.log('LTC', x, i, grid[x][y] < grid[i][y])
        if (x !== i && grid[x][y] >= grid[i][y]) return false
    }

    return true
}

greaterThanOrEqualRow = (grid, coordinate) => {
    const x = coordinate[0]
    const y = coordinate[1]
    for (let i = 0; i < LENGTH; i++) {
        if (y !== i && grid[x][y] < grid[x][i]) return false
    }
    return true
}

saddlePoints = (grid) => {
    let sp = []

    for (let row = 0; row < LENGTH; row++) {
        for (let col = 0; col < LENGTH; col++) {
            console.log('row: ', row, 'col: ', col, 'condition: ', (greaterThanOrEqualRow(grid, [row, col]) &&
                lessThanColumn(grid, [row, col])))
            if (
                greaterThanOrEqualRow(grid, [row, col]) &&
                lessThanColumn(grid, [row, col])
            ) {
                sp.push([row, col])
            }
        }
    }

    return sp
}

saddlePoints(sampleGrid)
