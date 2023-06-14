class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

const tree = new BST ( "nodes", 
     [
        {"id": "10", "left": "5", "right": "15", "value": 10},
        {"id": "15", "left": "13", "right": "22", "value": 15},
        {"id": "22", "left": null, "right": null, "value": 22},
        {"id": "13", "left": null, "right": "14", "value": 13},
        {"id": "14", "left": null, "right": null, "value": 14},
        {"id": "5", "left": "2", "right": "5-2", "value": 5},
        {"id": "5-2", "left": null, "right": null, "value": 5},
        {"id": "2", "left": "1", "right": null, "value": 2},
        {"id": "1", "left": null, "right": null, "value": 1}
      ]
  )

function findClosestValueInBst(tree, target) {
  let current = tree;
  let bestNode = null;
  let bestDiff = Infinity;
  let stack = [[current, bestNode, bestDiff]];
  
  while (stack.length) {
    [current, bestNode, bestDiff] = stack.pop();
    const currentDiff = Math.abs(target - current.value);

    if (currentDiff === 0) {
      return current.value;
    }

    if (currentDiff < bestDiff) {
      bestNode = current.value;
      bestDiff = currentDiff;
    }

    if (current.right) stack.push([current.right, bestNode, bestDiff]);
    if (current.left) stack.push([current.left, bestNode, bestDiff]);

  }
  console.log(bestNode)
  return bestNode;
}
console.log(findClosestValueInBst(tree, 12))
