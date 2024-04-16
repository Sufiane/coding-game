const nums = [1, 1, 1, 1]
const minK = 1
const maxK = 1

const isValidArray = (array: number[]) =>
    array.includes(minK) && array.includes(maxK)

export function countSubArrays(
    nums: number[],
    minK: number,
    maxK: number
): number {
    let left = 0
    let right = 0
    let nbSubarray = 0

    while (right <= nums.length) {
        const currentValue = nums[right]

        console.log('current value', currentValue)

        if (currentValue > maxK || currentValue < minK) {
            console.log('not complying')
            left = right + 1
        }

        nbSubarray += isValidArray(nums.slice(left, right + 1)) ? 1 : 0

        console.log('current value subarray', nbSubarray)
        right++
    }

    return nbSubarray
}

console.log('result: ', countSubArrays(nums, minK, maxK))

function workingSolution(nums: number[], minK: number, maxK: number): number {
    let left = 0
    let right = 0
    let res = 0
    let minPos = -1
    let maxPos = -1

    while (right < nums.length) {
        const end = nums[right]

        if (end < minK || end > maxK) {
            minPos = -1
            maxPos = -1
            left = right + 1
        }

        if (end === minK) {
            minPos = right
        }
        if (end === maxK) {
            maxPos = right
        }

        if (minPos !== -1 && maxPos !== -1) {
            res += Math.min(minPos, maxPos) + 1 - left
        }

        right++
    }

    return res
}
