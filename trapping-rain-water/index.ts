export function trap(height: number[]): number {
    let trappedWater = 0

    while (height.length > 0) {
        removeLeadingZeros(height)
        removeEndingZeros(height)

        for (const h of height) {
            if (h === 0) {
                trappedWater++
            }
        }

        subtractArray(height)
    }

    return trappedWater
}

function removeLeadingZeros(array: number[]): void {
    while (array[0] === 0) {
        array.shift()
    }
}

function removeEndingZeros(array: number[]): void {
    while (array.at(-1) === 0) {
        array.pop()
    }
}

function subtractArray(array: number[]): void {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            array[i] = array[i] - 1
        }
    }
}
