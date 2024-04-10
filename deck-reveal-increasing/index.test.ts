import assert from 'node:assert';
import { describe, it } from 'node:test';
import { deckRevealedIncreasing } from './index';

describe('deckRevealedIncreasing()', () => {
    describe('deck = [17,13,11,2,3,5,7]', () => {
        it('should return [2,13,3,11,5,17,7]', () => {
            assert.deepEqual(
                deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]), [2, 13, 3, 11, 5, 17, 7])
        })
    })

    describe('deck = [1,1000]', () => {
        it('should return [1,1000]', () => {
            assert.deepEqual(
                deckRevealedIncreasing([1, 1000]), [1, 1000])
        })
    })
})
