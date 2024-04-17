/**
 * Definition for singly-linked list.
 * */
export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

export function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    if (list1 !== null) {
        if (list2 !== null) {
            if (list1.val < list2.val) {
                return new ListNode(list1.val, mergeTwoLists(list1.next, list2))
            } else {
                return new ListNode(list2.val, mergeTwoLists(list1, list2.next))
            }
        } else {
            return new ListNode(list1.val, mergeTwoLists(list1.next, null))
        }
    } else {
        if (list2 !== null) {
            return new ListNode(list2.val, mergeTwoLists(list2.next, null))
        } else {
            return null
        }
    }
}
