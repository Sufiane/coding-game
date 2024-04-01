import assert from 'node:assert';
import { describe, it } from 'node:test';
import { romanToInt } from './index';

describe('roman to integer', () => {
    describe('III', () => {
        it('should return 3', () => {
            assert.strictEqual(romanToInt('III'), 3)
        })
    })
    describe('LVIII', () => {
        it('should return 58', () => {
            assert.strictEqual(romanToInt('LVIII'), 58)
        })
    })
    describe('MCMXCIV', () => {
        it('should return 1994', () => {
            assert.strictEqual(romanToInt('MCMXCIV'), 1994)
        })
    })
})
