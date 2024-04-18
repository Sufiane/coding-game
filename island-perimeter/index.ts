export function islandPerimeter(grid: number[][]): number {
    let perimeter = 0

    // we get all the land coordinates
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) {
                perimeter +=
                    4 -
                    (grid[row - 1]?.[col] ?? 0) -
                    (grid[row + 1]?.[col] ?? 0) -
                    (grid[row]?.[col - 1] ?? 0) -
                    (grid[row]?.[col + 1] ?? 0)
            }
        }
    }

    return perimeter
}
