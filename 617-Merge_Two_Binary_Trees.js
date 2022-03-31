var mergeTrees = function(root1, root2) {
    //base case if a node is null return the matching node from the other tree
    if(!root1) return root2
    if(!root2) return root1
    //sum the values of the nodes from both trees into root2
    root2.val += root1.val
    
    //call the function on all subtrees left of the root, recursively
    root2.left = mergeTrees(root1.left,root2.left)
    //call the function on all subtress right of the root, recursively
    root2.right = mergeTrees(root1.right, root2.right)
    //return the merged tree
    return root2
};