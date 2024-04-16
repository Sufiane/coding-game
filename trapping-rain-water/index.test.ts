import assert from 'node:assert'
import { trap } from './index'
import { describe, it } from 'node:test'

describe('trap()', () => {
    describe('[0,1,0,2,1,0,1,3,2,1,2,1]', () => {
        it('should 6', () => {
            assert(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6)
        })
    })

    describe('[4,2,0,3,2,5]', () => {
        it('should 9', () => {
            assert(trap([4, 2, 0, 3, 2, 5]), 6)
        })
    })
})
