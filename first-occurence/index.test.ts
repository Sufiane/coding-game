import { describe, it } from 'node:test'
import assert from 'node:assert'
import { strStr } from './index'

describe('fistOccurrence', () => {
    describe('haystack = "sadbutsad", needle = "sad"', () => {
        it('should return 0', () => {
            assert.deepEqual(strStr('sadbutsad', 'sad'), 0)
        })
    })

    describe('haystack = "leetcode", needle = "leeto"', () => {
        it('should return -1', () => {
            assert.deepEqual(strStr('leetcode', 'leeto'), -1)
        })
    })
})
