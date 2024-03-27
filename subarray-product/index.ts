const input = [10, 5, 2, 6]
const k: number = 100

export function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k < 1) {
        return 0
    }

    let product = 1
    let result = 0
    let start = 0
    let end = 0

    while (end < nums.length) {
        product *= nums[end]

        while (product >= k && start <= end) {
            product /= nums[start]
            start++
        }


        result += end - start + 1
        end++
    }

    return result
}

// console.log('result : ', numSubarrayProductLessThanK(input, k))

function numSubarrayProductLessThanKDumber(nums: number[], k: number): number {
    let result = 0

    if (k < 1) {
        return 0
    }

    for (let i = 0; i < nums.length; i++) {
        let product = 1

        for (let j = i; j < nums.length; j++) {
            let tmpProduct = product * nums[j]

            if (tmpProduct < k) {
                result++
                product = tmpProduct
            } else {
                break
            }
        }
    }

    return result
}

console.log('result Dumber: ', numSubarrayProductLessThanKDumber([10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3], 19))
