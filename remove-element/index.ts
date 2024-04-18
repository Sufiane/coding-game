export function removeElement(nums: number[], val: number): number {
    const filteredValues =  nums.filter((value) => value !== val);

    // in order for leetcode to accept the answer we must do this
    nums.length = 0
    nums.push(...filteredValues)

    return nums.length
}
