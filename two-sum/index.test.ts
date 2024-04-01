import { describe, it } from 'node:test';
import { twoSum } from './index';
import assert from 'node:assert';

describe('two sum', () => {
    describe('nums = [2,7,11,15], target = 9', () => {
        it('should return [0, 1]', () => {
            assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1])
        });
    })

    describe('nums = [3,2,4] target = 6', () => {
        it('should return [1, 2]', () => {
            assert.deepEqual(twoSum([3,2,4], 6), [1, 2])
        });
    })
})
