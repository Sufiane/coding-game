export function shuffle(nums: number[], n: number): number[] {
    const yArray = nums.splice(n, nums.length)
    const result = []

    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i], yArray.shift())
    }

    return result
};
