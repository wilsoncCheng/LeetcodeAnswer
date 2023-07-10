/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (head.next == null) return head;
    let arr: number[] = []
    let ptr = head
    let result: ListNode
    while (ptr) {
        arr.push(ptr.val)
        ptr = ptr.next
    }

    for (let i = 1; i < arr.length; i += 2) {
        let temp: number = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = temp
    }
    head= new ListNode(arr[0])
    let temp: ListNode = head
    for (let i = 1; i < arr.length; i++) {
        let n1: ListNode = new ListNode(arr[i])
        temp.next = n1
        temp = temp.next
    }
    return head
};