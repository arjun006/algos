var inorderTraversal = function(root) {
    let output = []
    helper(root, output)
    return output

};

const helper = (root, output) => {
    if(root != null) {
        helper(root.left, output)
        output.push(root.val)
        helper(root.right,output)
    }
}