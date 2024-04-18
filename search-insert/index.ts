export function searchInsert(nums: number[], target: number): number {
    if (target < nums[0]) return 0
    if (target > nums.at(-1)) return nums.length

    let index = 0

    while (target > nums[index]) {
        index++
    }

    return index
}
