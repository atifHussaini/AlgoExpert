// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    let length = 1;
    const workingArr = [head];
  
    while (workingArr.length) {
      const node = workingArr.pop();
      if (node.next !== null) {
        workingArr.push(node.next);
        length++;
      }
    }
  
    let count = 0;
    let target = length - k - 1;
    let currentNode = head;
  
    if (target < count) {
      currentNode.value = currentNode.next.value;
      currentNode.next = currentNode.next.next
    }
  
    while (count <= target) {
      if (count !== target) currentNode = currentNode.next;
      if (count === target) currentNode.next = currentNode.next.next;
      count++;
    }
}