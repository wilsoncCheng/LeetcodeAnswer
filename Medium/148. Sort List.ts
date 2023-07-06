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

function sortList(head: ListNode | null): ListNode | null {
    if (head == null ) return null
    let arr: number[] = []
    let ptr = head
    while (ptr) {
        arr.push(ptr.val)
        ptr = ptr.next
    }
    arr.sort((a, b) => a - b)
    
    let n: ListNode = new ListNode(arr[0])
    head = n
    let temp: ListNode = head

    for (let i = 1; i < arr.length; i++) {
        let n1: ListNode = new ListNode(arr[i])
        temp.next = n1
        temp = temp.next
    }
    return head
};