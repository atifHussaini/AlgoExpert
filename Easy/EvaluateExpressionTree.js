class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function evaluateExpressionTree(tree) {
   if (tree.value > 0) return tree.value;
  
    const left = evaluateExpressionTree(tree.left);
    const right = evaluateExpressionTree(tree.right);
  
    if (tree.value === -1) return left + right;
    if (tree.value === -2) return left - right;
    if (tree.value === -3) return Math.trunc(left / right);
    if (tree.value === -4) return left * right;
}