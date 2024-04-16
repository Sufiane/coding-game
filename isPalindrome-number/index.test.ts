import { describe, it } from 'node:test'
import assert from 'node:assert'

import { isPalindrome } from './index'

describe('isPalindrome-number', () => {
    describe('121', () => {
        it('should return true', () => {
            assert.strictEqual(isPalindrome(121), true)
        })
    })

    describe('-121', () => {
        it('should return false', () => {
            assert.strictEqual(isPalindrome(-121), false)
        })
    })

    describe('10', () => {
        it('should return false', () => {
            assert.strictEqual(isPalindrome(10), false)
        })
    })
})
