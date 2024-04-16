import { describe, it } from 'node:test'
import assert from 'node:assert'
import { removeKdigits } from './index'

describe('RemoveKDigits', () => {
    describe('num = "1432219", k = 3', () => {
        it('should return "1219"', () => {
            assert.deepEqual(removeKdigits('1432219', 3), '1219')
        })
    })

    describe('num = "10200", k = 1', () => {
        it('should return "200"', () => {
            assert.deepEqual(removeKdigits('10200', 1), '200')
        })
    })

    describe('num = "10", k = 2', () => {
        it('should return "0"', () => {
            assert.deepEqual(removeKdigits('10', 2), '0')
        })
    })

    describe('num = "10001", k = 4', () => {
        it('should return "0"', () => {
            assert.deepEqual(removeKdigits('10001', 4), '0')
        })
    })

    describe('num = "112", k = 1', () => {
        it('should return "11"', () => {
            assert.deepEqual(removeKdigits('112', 1), '11')
        })
    })

    describe('num = "10", k = 1', () => {
        it('should return "0"', () => {
            assert.deepEqual(removeKdigits('10', 1), '0')
        })
    })

    describe('num = "1234567890", k = 9', () => {
        it('should return "0"', () => {
            assert.deepEqual(removeKdigits('1234567890', 9), '0')
        })
    })
})
