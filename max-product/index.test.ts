import assert from 'node:assert';
import { describe, it } from 'node:test';
import { maxProduct } from './index';

describe('max-product', () => {
    describe('nums = [3,4,5,2]', () => {
        it('should return 12', () => {
            assert.strictEqual(maxProduct([3, 4, 5, 2]), 12)
        })
    })

    describe('[1,5,4,5]', () => {
        it('should return 16', () => {
            assert.strictEqual(maxProduct([1, 5, 4, 5]), 16)
        })
    })

    describe('[3, 7]', () => {
        it('should return 12', () => {
            assert.strictEqual(maxProduct([3, 7]), 12)
        })
    })
})
