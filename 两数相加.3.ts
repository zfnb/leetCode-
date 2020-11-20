class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
/* 
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */
var addTwoNumbers = function (l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // 定义一个新节点
    let ans = new ListNode(0),
        // 定义cur节点指向ans引用
        cur = ans,
        val = 0
    // 如果l1有值或者l2有值或者val不为零
    while (l1 || l2 || val) {
        // l1或者l2或者new ListNode(val) 不为零(有进位没算)
        let tmp: ListNode | null = l1 || l2 || val && new ListNode(val) || null
        // 当前节点的下一个节点为tmp
        cur.next = tmp
        // 如果有l1节点
        if (l1) {
            // val 等于当前值加上l1的val
            val += l1.val
            // l1指向下一个节点
            l1 = l1.next
        }
        // 如果有l2节点
        if (l2) {
            // val 等于当前值加上l2的val
            val += l2.val
            // l2指向下一个节点
            l2 = l2.next
        }
        // 如果tmp不为null
        if (tmp) {
            // val取个位数
            tmp.val = val % 10
            // 超过十 进位
            val = Math.floor(val / 10)
            // tmp 赋给 cur
            cur = tmp
        }
    }
    return ans.next
};

