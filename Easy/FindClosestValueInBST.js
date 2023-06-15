const tree = {
    "nodes": [
      {"id": "10", "left": "5", "right": "15", "value": 10},
      {"id": "15", "left": "13", "right": "22", "value": 15},
      {"id": "22", "left": null, "right": null, "value": 22},
      {"id": "13", "left": null, "right": "14", "value": 13},
      {"id": "14", "left": null, "right": null, "value": 14},
      {"id": "5", "left": "2", "right": "5-2", "value": 5},
      {"id": "5-2", "left": null, "right": null, "value": 5},
      {"id": "2", "left": "1", "right": null, "value": 2},
      {"id": "1", "left": null, "right": null, "value": 1}
    ],
    "root": "10"
  }

const target = 12;

function findClosestValueInBst(tree, target) {
    const workingArr = [tree];
    let minDiff = Infinity;
    let closestVal;
  
    while (workingArr.length) {
      const node = workingArr.shift();
      const currentDiff = Math.abs(target - node.value)
  
      if (currentDiff < minDiff) {
        minDiff = currentDiff;
        closestVal = node.value;
      }
  
      if (node.value === target) return node.value;
      if (node.value < target && node.right !== null) workingArr.push(node.right);
      if (node.value > target && node.left !== null) workingArr.push(node.left);
    }
    return closestVal;
  }

console.log(findClosestValueInBst(tree, target))