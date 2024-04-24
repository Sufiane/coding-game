import assert from 'node:assert'
import { climbStairs } from './index'
import { describe, it } from 'node:test'

describe('climbStairs', () => {
    describe('2', () => {
        it('should return 2', () => {
            assert.deepEqual(climbStairs(2), 2)
        })
    })

    describe('3', () => {
        it('should return 3', () => {
            assert.deepEqual(climbStairs(3), 3)
        })
    })

    describe('44', () => {
        it('should return x', () => {
            assert.deepEqual(climbStairs(44), 1134903170,)
        })
    })
})
