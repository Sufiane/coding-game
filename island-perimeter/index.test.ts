import { describe, it } from 'node:test'
import assert from 'node:assert'

import { islandPerimeter } from './index'

describe('islandPerimeter', () => {
    describe('[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]', () => {
        it('should return 16', () => {
            assert(
                islandPerimeter([
                    [0, 1, 0, 0],
                    [1, 1, 1, 0],
                    [0, 1, 0, 0],
                    [1, 1, 0, 0],
                ]),
                16
            )
        })
    })

    describe('[[1]]', () => {
        it('should return 4', () => {
            assert(islandPerimeter([[1]]), 4)
        })
    })

    describe('[[1, 0]]', () => {
        it('should return 4', () => {
            assert(islandPerimeter([[1, 0]]), 4)
        })
    })
})
