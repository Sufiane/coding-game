import assert from 'node:assert'
import { describe, it } from 'node:test'

import { shuffle } from './index'

describe('shuffle-array', () => {
    describe.skip('nums = [2,5,1,3,4,7], n = 3', () => {
        it('should return [2,3,5,4,1,7]', () => {
            assert.deepEqual(shuffle([2, 5, 1, 3, 4, 7], 3), [2, 3, 5, 4, 1, 7])
        })
    })

    describe('nums = [1,2,3,4,4,3,2,1], n = 4', () => {
        it('should return [1,4,2,3,3,2,4,1]', () => {
            assert.deepEqual(
                shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4),
                [1, 4, 2, 3, 3, 2, 4, 1]
            )
        })
    })

    describe.skip('nums = [1,1,2,2], n = 2', () => {
        it('should return [1,2,1,2]', () => {
            assert.deepEqual(shuffle([1, 1, 2, 2], 2), [1, 2, 1, 2])
        })
    })
})
