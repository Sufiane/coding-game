export function removeDuplicates(nums: number[]): number {
    const set = new Set(nums)

    nums = [...set]

    return set.size
}

removeDuplicates([1,1,2])
