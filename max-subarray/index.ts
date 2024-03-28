const array = [1, 2, 3, 1, 2, 3, 1, 2]
const maxOccurrence = 2
//const array = [1]
//const maxOccurrence = 1

export function maxSubarrayLength(nums: number[], k: number): number {
    if (k < 1) {
        return 0
    }

    let biggestLength = 0

    for (let i = 0; i < nums.length; i++) {
        let tmpMap = new Map<number, number>()
        let tmpLength = 0

        for (let j = i; j < nums.length; j++) {
            const occurrence = tmpMap.get(nums[j])

            if (!occurrence) {
                tmpMap.set(nums[j], 1)
                tmpLength++
                biggestLength = tmpLength > biggestLength ? tmpLength : biggestLength
            } else if (occurrence >= k) {
                biggestLength = tmpLength > biggestLength ? tmpLength : biggestLength
                break;
            } else {
                tmpMap.set(nums[j], occurrence + 1)
                tmpLength++
                biggestLength = tmpLength > biggestLength ? tmpLength : biggestLength
            }
        }
    }

    return biggestLength
}

console.log('result: ', maxSubarrayLength(array, maxOccurrence))
