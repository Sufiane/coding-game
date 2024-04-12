export function removeKdigits(num: string, k: number): string {
    if (k === num.length) {
        return '0'
    }

    const numbers = num.split('').map((char, index, array) => {
        return Number(array.toSpliced(index, k).join(''))
    })

    numbers.sort((a, b) => a - b)

    return numbers[0].toString()
};
