function nodeDepths(root) {
    let totalDepth = 0;
    let depth = 0;
    const workingArr = [{node: root, depth: depth}];
  
    while (workingArr.length) {
      const currentNode = workingArr.pop();
      const currentNodeDepth = currentNode.depth;
      totalDepth += currentNode.depth;
      
      if (currentNode.node.right) workingArr.push({node: currentNode.node.right, depth: currentNodeDepth + 1});
      if (currentNode.node.left) workingArr.push({node: currentNode.node.left, depth: currentNodeDepth + 1});
    }
    return totalDepth;
}