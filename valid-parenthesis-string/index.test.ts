import assert from 'node:assert'
import { describe, it } from 'node:test'

import { checkValidString } from './index'

describe('checkValidString', () => {
    describe('s = "()"', () => {
        it('should return true', () => {
            assert.strictEqual(checkValidString('()'), true)
        })
    })

    describe('s = "(*)"', () => {
        it('should return true', () => {
            assert.strictEqual(checkValidString('(*)'), true)
        })
    })

    describe('s = "(*))"', () => {
        it('should return true', () => {
            assert.strictEqual(checkValidString('(*))'), true)
        })
    })

    describe('s = "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"', () => {
        it('should return true', () => {
            assert.strictEqual(
                checkValidString(
                    '((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()'
                ),
                true
            )
        })
    })

    describe('s = "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"', () => {
        it('should return false', () => {
            assert.strictEqual(
                checkValidString(
                    '(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())'
                ),
                false
            )
        })
    })

    describe('s = "(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((("', () => {
        it('should return false', () => {
            assert.strictEqual(
                checkValidString(
                    '(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((('
                ),
                false
            )
        })
    })

    describe('s = "*)*())"', () => {
        it('should return true', () => {
            assert.strictEqual(checkValidString('*)*())'), true)
        })
    })
})
