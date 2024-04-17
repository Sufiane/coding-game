import assert from 'node:assert'
import { describe, it } from 'node:test'
import { ListNode, mergeTwoLists } from './index'

describe('mergeTwoList', () => {
    describe('2 full lists', () => {
        it('should return a new merged list', () => {
            const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
            const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

            const expectedList = new ListNode(
                1,
                new ListNode(
                    1,
                    new ListNode(
                        2,
                        new ListNode(3, new ListNode(4, new ListNode(4)))
                    )
                )
            )

            assert(mergeTwoLists(list1, list2), expectedList)
        })
    })

    describe('2 empty lists', () => {
        it('should return a new merged list', () => {
            const list1 = new ListNode()
            const list2 = new ListNode()

            const expectedList = new ListNode()

            assert(mergeTwoLists(list1, list2), expectedList)
        })
    })

    describe('1 empty list + 1 full list', () => {
        it('should return a new merged list', () => {
            const list1 = new ListNode()
            const list2 = new ListNode(0)

            assert(mergeTwoLists(list1, list2), list2)
        })
    })
})
