import assert from 'node:assert';
import { describe, it } from 'node:test';

import { isValid } from './index';

describe('isValid()', () => {
    describe('s = "()"', () => {
        it('should return true', () => {
            assert.deepEqual(isValid('()'), true)
        })
    })

    describe('s = "()[]{}"', () => {
        it('should return true', () => {
            assert.deepEqual(isValid('()'), true)
        })
    })

    describe('s = "(]"', () => {
        it('should return false', () => {
            assert.deepEqual(isValid('(]'), false)
        })
    })

    describe('s = "([)]"', () => {
        it('should return false', () => {
            assert.deepEqual(isValid('([)]'), false)
        })
    })

    describe('s = "{[]}"', () => {
        it('should return true', () => {
            assert.deepEqual(isValid('{[]}'), true)
        })
    })
})
