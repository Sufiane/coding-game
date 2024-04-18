import { describe, it } from 'node:test'
import assert from 'node:assert'
import { searchInsert } from './index'

describe('searchInsert', () => {
    describe('nums = [1,3,5,6], target = 5', () => {
        it('should return 2', () => {
            assert.deepEqual(searchInsert([1, 3, 5, 6], 5), 2)
        })
    })

    describe('nums = [1,3,5,6], target = 2', () => {
        it('should return 1', () => {
            assert.deepEqual(searchInsert([1, 3, 5, 6], 2), 1)
        })
    })

    describe('nums = [1,3,5,6], target = 7', () => {
        it('should return 4', () => {
            assert.deepEqual(searchInsert([1, 3, 5, 6], 7), 4)
        })
    })
})
