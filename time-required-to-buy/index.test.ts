import { describe, it } from 'node:test'
import assert from 'node:assert'
import { timeRequiredToBuy } from './index'

describe('timeRequiredToBuy', () => {
    describe('tickets = [2,3,2], k = 2', () => {
        it('should return 6', () => {
            assert.strictEqual(timeRequiredToBuy([2, 3, 2], 2), 6)
        })
    })

    describe('tickets = [5,1,1,1], k = 0', () => {
        it('should return 8', () => {
            assert.strictEqual(timeRequiredToBuy([5, 1, 1, 1], 0), 8)
        })
    })
})
