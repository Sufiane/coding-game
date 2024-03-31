import { describe, it } from 'node:test';
import assert from 'node:assert';

import { countSubArrays } from './index'

describe('subarray-fixed-bound', () => {
    describe('[1, 3, 5, 2, 7, 5], min: 1, max: 5', () => {
        it('should return 2',() => {
            const nums = [1, 3, 5, 2, 7, 5]
            const minK = 1
            const maxK = 5

            assert.strictEqual(countSubArrays(nums, minK, maxK), 2)
        })
    })

    describe('[1, 1, 1, 1], min: 1, max: 1', () => {
        it('should return 10',() => {
            const nums = [1, 1, 1, 1]
            const minK = 1
            const maxK = 1

            assert.strictEqual(countSubArrays(nums, minK, maxK), 10)
        })
    })
})
