export function islandPerimeter(grid: number[][]): number {
    let perimeter = 0
    const coordToCheck: number[][] = []

    // we get all the land coordinates
    for (let line = 0; line < grid.length; line++) {
        for (let col = 0; col < grid[line].length; col++) {
            if (grid[line][col] === 1) {
                coordToCheck.push([line, col])
            }
        }
    }

    for (let i = 0; i < coordToCheck.length; i++) {
        const [row, col] = coordToCheck[i]

        perimeter +=
            4 -
            (grid[row - 1]?.[col] ?? 0) -
            (grid[row + 1]?.[col] ?? 0) -
            (grid[row]?.[col - 1] ?? 0) -
            (grid[row]?.[col + 1] ?? 0)
    }

    return perimeter
}
