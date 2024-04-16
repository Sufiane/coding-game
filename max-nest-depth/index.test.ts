import { describe, it } from 'node:test'
import assert from 'node:assert'
import { maxDepth } from './index'

describe('max-nest-depth', () => {
    describe('(1+(2*3)+((8)/4))+1', () => {
        it('should return 3', () => {
            assert.strictEqual(maxDepth('(1+(2*3)+((8)/4))+1'), 3)
        })
    })

    describe('(1)+((2))+(((3)))', () => {
        it('should return 3', () => {
            assert.strictEqual(maxDepth('(1)+((2))+(((3)))'), 3)
        })
    })
})
