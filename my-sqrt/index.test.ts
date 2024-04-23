import assert from 'node:assert'
import { mySqrt } from './index'
import { describe, it } from 'node:test'

describe('mySqrt', () => {
    describe('4', () => {
        it('should return the sqrt', () => {
            assert.deepEqual(mySqrt(4), 2)
        })
    })

    describe('8', () => {
        it('should return the sqrt', () => {
            assert.deepEqual(mySqrt(8), 2)
        })
    })
})
