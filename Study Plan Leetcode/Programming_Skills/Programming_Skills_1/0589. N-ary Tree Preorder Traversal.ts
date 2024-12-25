/*
 * Definition for _Node.
*/

class _Node {
    val: number
    children: _Node[]

    constructor(val?: number, children?: _Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.children = (children === undefined ? [] : children)
    }
}
function preorder(root: _Node | null): number[] {
    const result: number[] = [];
    
    function traverse(node: _Node | null): void {
        if (node === null) return;
        
        result.push(node.val);
        
        for (const child of node.children) {
            traverse(child);
        }
    }
    
    traverse(root);
    return result;
}