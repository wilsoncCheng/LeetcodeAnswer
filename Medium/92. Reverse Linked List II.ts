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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head) return null
    if (!head.next) return head
    let ptr: ListNode = head
    let arr: number[] = []
    while (ptr) {
        arr.push(ptr.val)
        ptr = ptr.next
    }
    let tempArr: number[] = arr.splice(left - 1, right - left+1)
    tempArr = tempArr.reverse()
    for (let i = 0; i < tempArr.length; i++) {
        arr.splice(left - 1 + i, 0, tempArr[i])
    }
    head = new ListNode(arr[0])
    let temp: ListNode = head
    for (let i = 1; i < arr.length; i++) {
        let n: ListNode = new ListNode(arr[i])
        temp.next = n
        temp = temp.next
    }
    return head
};