/**
 * 解题思路
p0指奇数节点，p1指偶数节点，p1一定比p0先到达链表尾部
head内存地址不变，head.next在第一次迭代中被改。n指向初始head.next第一偶数内存地址
每次取出上次p0（奇数）和p1（偶数），分别指向当前位置奇数和偶数，迭代结束后
p0刚好指向最后一个奇数，第一个偶数内存地址在n，两者相连即可
 */
// 18 - 22           52 2-3
let oddEvenList = function (head) {
    if (head && head.next) {
        let p = [head, head.next];
        // 记录偶节点链的第一个节点
        let n = p[1];
        // 一定是偶节点p[1]先到达终点
        while (p[1] && p[1].next) {
            p[0].next = p[0].next.next;
            p[1].next = p[1].next.next;
            // 重新设置p
            p = [p[0].next, p[1].next];
        }
        // 奇节点链的最后一个节点的下一个元素指向偶节点链的第一个节点
        p[0].next = n;
    }
    return head;
};