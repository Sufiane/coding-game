export function mySqrt(x: number): number {
    if (x === 0) {
        return 0
    }

    for (let i = 1; i <= x; i++) {
        if (i * i <= x && (i + 1) * (i + 1) > x) {
            return i
        }
    }
}
