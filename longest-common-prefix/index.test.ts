import { describe, it } from 'node:test';
import assert from 'node:assert';
import { longestCommonPrefix } from './index';

describe('longest common prefix', () => {
    describe('["flower","flow","flight"]', () => {
        it('should return "fl"', () => {
            assert.strictEqual(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl')
        })
    })

    describe('["dog","racecar","car"]', () => {
        it('should return ""', () => {
            assert.strictEqual(longestCommonPrefix(["dog","racecar","car"]), '')
        })
    })
});
