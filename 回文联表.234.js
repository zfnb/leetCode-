/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
const A = new ListNode("A");
const B = new ListNode("B");
const C = new ListNode("B");
const D = new ListNode("A");
A.next = B;
B.next = C;
C.next = D;
let isPalindrome = function (head) {
    let tempHead = head;
    let LinkArr = [];
    while (tempHead) {
        LinkArr.push(tempHead);
        tempHead = tempHead.next;
    }
    let left = 0, right = LinkArr.length - 1;
    while (left < right) {
        if (LinkArr[left].val !== LinkArr[right].val) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
const result = isPalindrome(A);
console.log(result);