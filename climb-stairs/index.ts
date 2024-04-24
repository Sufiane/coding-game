// this take more time than the one below
export function climbStairsRecursive(n: number): number {
    if (n === 1) {
        return 1
    }

    if (n === 2) {
        return 2
    }

    return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2)
}

export function climbStairs(n: number): number {
    if (n <= 0) {
        return 0
    }

    if (n === 1) {
        return 1
    }

    if (n === 2) {
        return 2
    }

    let lastStep = 2
    let lastStep2 = 1
    let currentNbWays = 0

    for (let i = 3; i <= n; i++) {
        let currentStep = lastStep + lastStep2

        currentNbWays = currentStep

        lastStep2 = lastStep
        lastStep = currentStep
    }

    return currentNbWays
}
