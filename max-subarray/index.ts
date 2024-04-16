const lint =
    'https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/description/'

//const array = [1, 2, 3, 1, 2, 3, 1, 2]
//const maxOccurrence = 2

// const array = [1]
// const array = [2, 2, 3]
// const maxOccurrence = 1

// const array = [1, 1, 1, 3]
// const maxOccurrence = 2

// todo problem get for instead of 2
const array = [1, 2, 1, 2, 1, 2, 1, 2]
const maxOccurrence = 1

export function maxSubarrayLength(nums: number[], k: number): number {
    if (k < 1) {
        return 0
    }

    let left = 0
    let right = 0
    let biggestLength = 0
    let tmpMap = new Map<number, number>()

    while (right < nums.length) {
        let occurrence = tmpMap.get(nums[right]) ?? 0

        if (occurrence === 0) {
            tmpMap.set(nums[right], occurrence)
        }

        console.log('toto', {
            left,
            right,
            numsleft: nums[left],
            numsright: nums[right],
            occurrence,
        })

        tmpMap.set(nums[right], occurrence + 1)

        while (occurrence + 1 > k && left < right) {
            console.log({ occurrence, left, right, value: nums[right] })
            occurrence--
            tmpMap.set(nums[left], occurrence)

            left++
        }

        biggestLength = Math.max(biggestLength, right - left + 1)
        right++
    }

    console.log('map final', { tmpMap })

    return biggestLength
}

console.log('result: ', maxSubarrayLength(array, maxOccurrence))
