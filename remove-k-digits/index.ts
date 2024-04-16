export function removeKdigits(num: string, k: number): string {
    const stack: string[] = []
    let rem = 0

    for (const n of num) {
        while (stack.length && n < stack.at(-1) && rem < k) {
            stack.pop()
            rem++
        }

        stack.push(n)
    }

    while (rem < k) {
        stack.pop()
        rem++
    }

    removeLeadingZeros(stack)

    return stack.join('') || '0'
}

function removeLeadingZeros(stack: string[]): string[] {
    while (stack[0] === '0') {
        stack.shift()
    }

    return stack
}
