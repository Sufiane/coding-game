const calculateAreaFromPerimeter = (perimeter: number, side?: number): number => {
    // if no side is given, we conclude that the shape is a square

    if (side !== undefined) {
        return ((perimeter / 2) - side) * side
    } else {
        return Math.pow(perimeter / 4, 2)
    }
}

const [perimeter, side] = process.argv.slice(2)
    .map(value => value ? Number.parseInt(value) : undefined);

if (!perimeter) {
    throw new Error('Perimeter is required to calculate the area.')
} else {
    console.log(calculateAreaFromPerimeter(perimeter, side));
}


