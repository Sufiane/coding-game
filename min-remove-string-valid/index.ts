export function minRemoveToMakeValid(s: string): string {
    let parenthesis = 0

    const openIndex: number[] = []
    const characters: string[] = s.split('')

    for (let i = 0; i < characters.length; i++) {
        if (characters[i] === ')') {
            parenthesis--

            if (parenthesis < 0) {
                characters.splice(i, 1)
                i--
                parenthesis = 0
            } else {
                openIndex.pop()
            }
        } else if (characters[i] === '(') {
            openIndex.push(i)
            parenthesis++
        }
    }

    if (parenthesis > 0) {
        let deleteCounter = 0

        while (parenthesis > 0) {
            characters.splice(openIndex.shift() - deleteCounter, 1)
            parenthesis--
            deleteCounter++
        }
    }

    return characters.join('')
};


// todo
//  need to pair the parenthesis together and then delete the ones w/o pairs
