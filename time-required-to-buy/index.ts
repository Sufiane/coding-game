export function timeRequiredToBuy(tickets: number[], k: number): number {
    let timeTaken = 0
    let i = 0

    while (tickets[k] > 0) {
        if (i === tickets.length) {
            i = 0
        }

        if (tickets[i] > 0) {
            tickets[i]--
            timeTaken++
        }

        i++
    }

    return timeTaken
}
