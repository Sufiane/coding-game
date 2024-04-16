export function checkValidString(s: string): boolean {
    const characters = s.split('')

    let openStack: number[] = []
    let wildCardStack: number[] = []

    if (s.length < 2 && s[0] !== '*') {
        console.log('early exit')
        return false
    }

    for (let i = 0; i < characters.length; i++) {
        if (characters[i] === '(') {
            openStack.push(i)
        } else if (characters[i] === ')') {
            if (openStack.length > 0) {
                openStack.pop()
            } else {
                const lastWildCard = wildCardStack.at(-1)

                if (lastWildCard === undefined) {
                    return false
                }

                wildCardStack.pop()
            }
        } else if (characters[i] === '*') {
            wildCardStack.push(i)
        }
    }

    while (openStack.length > 0) {
        if (wildCardStack.length === 0) {
            return false
        }

        const lastOpen = openStack.pop()
        const lastWildCard = wildCardStack.pop()

        if (lastOpen > lastWildCard) {
            return false
        }
    }

    return true
}
