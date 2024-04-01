export function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

    return []
};

export function twoSumFaster(nums: number[], target: number): number[] {
    const diffIndexes: Record<number, number> = {}

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if (diffIndexes[nums[i]] !== undefined) {
            return [diffIndexes[target - diff], i]
        } else {
            diffIndexes[diff] = i
        }
    }

    return []
};
