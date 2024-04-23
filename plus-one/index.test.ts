import assert from 'node:assert'
import { plusOne } from './index'
import { describe, it } from 'node:test'

describe('plusOne', () => {
    describe('digits = [1,2,3]', () => {
        it('should return the value + 1', () => {
            assert.deepEqual(plusOne([1, 2, 3]), [1, 2, 4])
        })
    })

    describe('digits = [4,3,2,1]', () => {
        it('should return the value + 1', () => {
            assert.deepEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2])
        })
    })

    describe('digits = [9]', () => {
        it('should return the value + 1', () => {
            assert.deepEqual(plusOne([9]), [1, 0])
        })
    })

    describe('digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]', () => {
        it('should return the value + 1', () => {
            assert.deepEqual(
                plusOne([
                    6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3,
                ]),
                [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
            )
        })
    })
})
