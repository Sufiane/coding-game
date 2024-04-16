import { describe, it } from 'node:test'
import assert from 'node:assert'
import { countStudents } from './index'

describe('CountStudents', () => {
    describe('students = [1,1,0,0], sandwiches = [0,1,0,1]', () => {
        it('should return 0', () => {
            assert.strictEqual(countStudents([1, 1, 0, 0], [0, 1, 0, 1]), 0)
        })
    })

    describe('students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]', () => {
        it('should return 3', () => {
            assert.strictEqual(
                countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]),
                3
            )
        })
    })
})
