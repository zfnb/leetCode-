/**
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

说明：不允许修改给定的链表。
 */
const detectCycle = function (head) {
  if (head === null) {
    return null;
  }
  let low = head;
  let fast = head;
  let isCycle = false;
  while (fast.next !== null && fast.next.next !== null) {
    low = low.next;
    fast = fast.next.next;
    if (low === fast) {
      isCycle = true;
      break;
    }
  }
  if (!isCycle) {
    return null;
  }
  fast = head;
  while (fast !== low) {
    fast = fast.next;
    low = low.next;
  }
  return fast;
};