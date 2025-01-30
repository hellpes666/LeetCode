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
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function getDecimalValue(head: ListNode | null): number {
    let binaryString: string = ''

    while (head?.val){
        binaryString += head.val
        head.next
    }

    const decimalValue: number = parseInt(binaryString, 2); 

    return decimalValue
}
