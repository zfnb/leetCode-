/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 *    20  
 *  344   453
 */
function sumNumbers(root) {
    return (function helper(root, i) {
        if (root === null) return 0;
        let temp = i * 10 + root.val;
        if (root.left === null && root.right === null) return temp;
        return helper(root.left, temp) + helper(root.right, temp);
    }(root, 0));
}