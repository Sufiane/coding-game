const nums = [
    1,
    3,
    5,
    2,
    7,
    5,
]
const minK = 1
const maxK = 5

export function countSubArrays(nums: number[], minK: number, maxK: number): number {
    let left = 0
    let right = 0
    let nbSubarray = 0
    let seenMin = false
    let seenMax = false

    while (right < nums.length) {

        if (nums[right] < minK || nums[right] > maxK) {
            right++
            left = right
            seenMax = false
            seenMin = false
        } else {
            seenMax = seenMax || nums[right] === maxK
            seenMin = seenMin || nums[right] === minK

            if (seenMax && seenMin) {
                nbSubarray++
            }

            right++
        }
    }

    return nbSubarray
};

console.log('result: ', countSubArrays(nums, minK, maxK))
