export function deckRevealedIncreasing(deck: number[]): number[] {
    const sortedDeck = deck.sort((a, b) => b - a)
    const orderedDeck: number[] = []
    const indexes: number[] = []

    for (let i = 0; i < sortedDeck.length; i++) {
        indexes.push(i)
    }

    while (indexes.length > 0) {
        orderedDeck[indexes[0]] = sortedDeck.pop()

        indexes.shift()

        if (indexes.length > 0) {
            indexes.push(indexes.shift())
        }
    }

    return orderedDeck
}
