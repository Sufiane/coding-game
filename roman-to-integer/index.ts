enum SymbolMap {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000
}

export function romanToInt(s: string): number {
    return s.split('').reduce((acc, letter, currentIndex) => {
        const currentValue = SymbolMap[letter as keyof typeof SymbolMap]
        const nextValue = SymbolMap[s[currentIndex + 1] as keyof typeof SymbolMap]

        if (currentValue < nextValue) {
            acc -= SymbolMap[letter as keyof typeof SymbolMap]
        } else {
            acc += SymbolMap[letter as keyof typeof SymbolMap]
        }

        return acc
    }, 0)
};
