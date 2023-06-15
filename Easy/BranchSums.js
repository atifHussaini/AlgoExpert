function branchSums(root) {
    const finalArr = [];
    const workingArr = [{node: root, sum: root.value}];
  
    while (workingArr.length) {
      const current = workingArr.pop();
      const currentSum = current.sum;
      
      if (current.node.right) workingArr.push({node: current.node.right, sum: currentSum + current.node.right.value});
      if (current.node.left) workingArr.push({node: current.node.left, sum: currentSum + current.node.left.value});
      if (current.node.left === null && current.node.right === null) finalArr.push(current.sum);
    }
    return finalArr;
}