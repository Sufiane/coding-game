import assert from 'node:assert'
import { minRemoveToMakeValid } from './index'
import { describe, it } from 'node:test'

describe('minRemoveToMakeValid', () => {
    describe('s = "lee(t(c)o)de)"', () => {
        it('should return "lee(t(c)o)de"', () => {
            assert.strictEqual(
                minRemoveToMakeValid('lee(t(c)o)de)'),
                'lee(t(c)o)de'
            )
        })
    })

    describe('s = "a)b(c)d"', () => {
        it('should return "ab(c)d"', () => {
            assert.strictEqual(minRemoveToMakeValid('a)b(c)d'), 'ab(c)d')
        })
    })

    describe('s = "))(("', () => {
        it('should return ""', () => {
            assert.strictEqual(minRemoveToMakeValid('))(('), '')
        })
    })

    describe('s = "(a(b(c)d)"', () => {
        it('should return "a(b(c)d)"', () => {
            assert.strictEqual(minRemoveToMakeValid('(a(b(c)d)'), 'a(b(c)d)')
        })
    })

    describe('s = "())()((("', () => {
        it('should return "()()"', () => {
            assert.strictEqual(minRemoveToMakeValid('())()((('), '()()')
        })
    })
})
