import assert from 'node:assert';
import { addBinary } from './index';
import { describe, it } from 'node:test';

describe('addBinary', () => {
    describe('a = "11", b = "1"', () => {
        it('should add properly', () => {
            assert.deepEqual(addBinary("11", "1"), "100")
        })
    })

    describe('a = "1010", b = "1011"', () => {
        it('should add properly', () => {
            assert.deepEqual(addBinary("1010", "1011"), "10101")
        })
    })
})
