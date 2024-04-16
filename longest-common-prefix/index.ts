export function longestCommonPrefix(strs: string[]): string {
    // sort by alphabetical order
    const sortedArray = strs.toSorted((wordA, wordB) =>
        wordB > wordA ? -1 : 1
    )
    const shortestWord = sortedArray[0]
    const longestWord = sortedArray[strs.length - 1]

    let commonPrefix = ''

    for (let i = 0; i < shortestWord.length; i++) {
        if (!longestWord.startsWith(commonPrefix + shortestWord[i])) {
            return commonPrefix
        }

        commonPrefix += shortestWord[i]
    }

    return commonPrefix
}
