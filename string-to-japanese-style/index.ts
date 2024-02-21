const maxLetterVertically = 4
const stringToTransform = 'Hello world'

const splitArrayInChunks = (arrayToSplit, chunkSize = 1) => {
    const chunks = []

    for (let i = 0; i < arrayToSplit.length; i += chunkSize) {
        const chunk = arrayToSplit.slice(i, i + chunkSize);
        chunks.push(chunk)
    }

    return chunks
}

const transformToJapaneseStyle = (maxLetter, stringToTransform) => {
    const arrayString = stringToTransform.split('')
    const chunks = splitArrayInChunks(arrayString, maxLetter)
    const reversedChunks = chunks.reverse()

    let resultString = ''

    for (let i = 0; i < maxLetterVertically; i++) {
        for (let j = 0; j < maxLetterVertically; j++) {
            const stringToAdd = (reversedChunks[j] ?? [])[i] ?? ' '

            resultString += stringToAdd
        }

        resultString += '\n'
    }

    return resultString
}


console.log('result:\n', transformToJapaneseStyle(maxLetterVertically, stringToTransform))
