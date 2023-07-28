/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false
    let stack: Array<TreeNode> = []
    let current: TreeNode;

    root.val = targetSum - root.val;
    stack.push(root)

    while (stack.length) {
        current = stack.pop();

        if (current.left === current.right && !current.val) return true

        if (current.left) {
            current.left.val = current.val - current.left.val
            stack.push(current.left)
        }

        if (current.right) {
            current.right.val = current.val - current.right.val
            stack.push(current.right)
        }
    }
    return false
};