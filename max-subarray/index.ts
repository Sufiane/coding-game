//const array = [1, 2, 3, 1, 2, 3, 1, 2]
//const maxOccurrence = 2

//const array = [1]
const array = [2, 2, 3]
const maxOccurrence = 1

export function maxSubarrayLength(nums: number[], k: number): number {
    if (k < 1) {
        return 0
    }

    let left = 0
    let right = 0
    let biggestLength = 0
    let tmpMap = new Map<number, number>()

    while (left < nums.length) {
        let tmpLength = 0

        while (right < nums.length) {
            const occurrence = tmpMap.get(nums[right])

            if (!occurrence) {
                tmpMap.set(nums[right], 1)
                tmpLength++
            } else if (occurrence + 1 <= k) {
                tmpMap.set(nums[right], occurrence + 1)
                tmpLength++
            } else {
                tmpMap.clear()
                break;
            }

            right++
        }

        left++
        right = left

        biggestLength = tmpLength > biggestLength ? tmpLength : biggestLength
    }

    return biggestLength
}

console.log('result: ', maxSubarrayLength(array, maxOccurrence))
