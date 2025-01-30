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

function middleNode(head: ListNode | null): ListNode | null {
    if (head === null) return null;

    let headToCountTotalLength = head;
    let totalLength: number = 0;

    while (headToCountTotalLength !== null) {
        totalLength += 1;
        headToCountTotalLength = headToCountTotalLength.next;
    }

    const indexToStartAppendElement: number = Math.floor(totalLength / 2);
    let currentIndex: number = 0;

    let resultHead: ListNode | null = null;
    let resultTail: ListNode | null = null;

    while (head !== null) {
        if (currentIndex >= indexToStartAppendElement) {
            const newNode = new ListNode(head.val);
            if (resultHead === null) {
                resultHead = newNode;
                resultTail = resultHead;
            } else {
                resultTail.next = newNode;
                resultTail = resultTail.next;
            }
        }
        currentIndex += 1;
        head = head.next;
    }

    return resultHead;
}



