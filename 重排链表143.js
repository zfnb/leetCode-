/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
const D = new ListNode("D");
const C = new ListNode("C", D);
const B = new ListNode("B", C);
const A = new ListNode("A", B);
let reorderList = function (head) {
    if (!head) return null;
    let tempHead = head;
    let arr = [];
    while (tempHead) {
        arr.push(tempHead);
        tempHead = tempHead.next;
    }
    // 原链表第一个节点不变，依次加入 最右边节点，最左边节点（加入后移除）
    let left = 1;
    let right = arr.length - 1;
    while (left <= right) {
        // debugger;
        // 先加右边节点
        head.next = arr[right];
        right--;
        head = head.next;
        // 如果left===right 节点的next指向自己，最后有节点置空可以重复添加
        // 也可以 用if(right>=left)排除重复添加
        // 再加左边节点
        head.next = arr[left];
        left++;
        head = head.next;
    }
    // 最后一个节点置空，避免出现环
    head.next = null;
};


const result = reorderList(A);
console.log(A);