/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const a = new ListNode(4);
const b = new ListNode(2);
const c = new ListNode(1);
const d = new ListNode(3);
a.next = b;
b.next = c;
c.next = d;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    if (!head) return null;
    let cur = head;
    let preHeader = new ListNode(0);
    let pre = preHeader;
    let next = null;
    // 如果cur不为空
    while (cur) {
        // 保存下一个要插入的节点
        next = cur.next;
        while (pre.next && (pre.next.val < cur.val)) {
            // 当前节点的值大于首节点，指针右移，让它和下一个节点比较
            pre = pre.next;
        }
        // 插入
        cur.next = pre.next;
        pre.next = cur;
        // pre重新指向头
        pre = preHeader;
        // cur指向下一个节点
        cur = next;
    }
    return preHeader.next;
};
console.log(insertionSortList(a));