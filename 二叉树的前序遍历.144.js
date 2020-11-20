/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
const E = new TreeNode("E");
const D = new TreeNode("D");
const C = new TreeNode("C");
const B = new TreeNode("B", D, E);
const A = new TreeNode("A", B, C);
const preorderTraversal = function (root) {
    if (!root) return [];
    const res = [];
    const tree = [root];
    while (tree.length > 0) {
        const node = tree.pop();
        res.push(node.val);
        if (node.right) tree.push(node.right);
        if (node.left) tree.push(node.left);
    }
    return res;
};
const result = preorderTraversal(A);
console.log(result);