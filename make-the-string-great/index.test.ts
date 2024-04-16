import assert from 'node:assert'
import { describe, it } from 'node:test'

import { makeGood } from './index'

describe('make the string great', () => {
    describe('s = "leEeetcode"', () => {
        it('should return "leetcode"', () => {
            assert.strictEqual(makeGood('leEeetcode'), 'leetcode')
        })
    })

    describe('s = "abBAcC"', () => {
        it('should return ""', () => {
            assert.strictEqual(makeGood('abBAcC'), '')
        })
    })

    describe('s = "s"', () => {
        it('should return "s"', () => {
            assert.strictEqual(makeGood('s'), 's')
        })
    })

    describe('s = "mC"', () => {
        it('should return "mC"', () => {
            assert.strictEqual(makeGood('mC'), 'mC')
        })
    })
})
