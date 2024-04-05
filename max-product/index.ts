export function maxProduct(nums: number[]): number {
    const [max, max2] = nums.sort((a, b) => b - a)

    return (max - 1) * (max2 - 1)
};
