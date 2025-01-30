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
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}


function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0; 
    }
    
    const PARENT_LEVEL_DEPTH = 1;
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

   return Math.max(leftDepth, rightDepth) + PARENT_LEVEL_DEPTH;
}


