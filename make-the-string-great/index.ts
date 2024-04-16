const isUpperCased = (str) => /[A-Z]/.test(str)

export function makeGood(s: string): string {
    if (s.length <= 1) {
        return s
    }

    let i = 0
    const letters = s.split('')

    while (i < letters.length - 1) {
        if (
            letters[i].toLowerCase() === letters[i + 1].toLowerCase() &&
            ((isUpperCased(letters[i]) && !isUpperCased(letters[i + 1])) ||
                (!isUpperCased(letters[i]) && isUpperCased(letters[i + 1])))
        ) {
            letters.splice(i, 2)
            i += i > 0 ? -1 : 0
        } else {
            i++
        }
    }

    return letters.join('')
}
