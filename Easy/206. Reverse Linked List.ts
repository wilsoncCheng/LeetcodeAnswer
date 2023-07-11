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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null
    let ptr: ListNode = head
    let arr: number[] = []
    while (ptr) {
        arr.push(ptr.val)
        ptr = ptr.next
    }
    arr = arr.reverse()
    head=new ListNode(arr[0])
    let n: ListNode = head
    for (let i = 1; i < arr.length; i++) {
        let temp: ListNode = new ListNode(arr[i])
        n.next=temp
        n=n.next
    }
    return head
};