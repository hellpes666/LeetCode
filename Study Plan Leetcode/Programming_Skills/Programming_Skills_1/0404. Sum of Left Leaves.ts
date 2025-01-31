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

const travellingCollectLeftLeaves = (root: TreeNode | null) => {
    const leftLeaves: number[] = [];

    function travelAhead(node: TreeNode | null, isLeft: boolean) {
        if (node === null) return;

        if (node.left === null && node.right === null && isLeft) {
            leftLeaves.push(node.val);
        }

        travelAhead(node.left, true);
        travelAhead(node.right, false);
    }

    travelAhead(root, false);
    return leftLeaves;
};

function sumOfLeftLeaves(root: TreeNode | null): number {
    const totalSum: number = travellingCollectLeftLeaves(root).reduce(
        (total, curValue) => total + curValue,
        0,
    );
    return totalSum;
}
