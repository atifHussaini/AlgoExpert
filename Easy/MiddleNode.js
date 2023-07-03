class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
  function middleNode(linkedList) {
    const arr = [];
    const workingArr = [linkedList]
  
    while (workingArr.length) {
      const currentNode = workingArr.shift();
      arr.push(currentNode);
  
      if (currentNode.next) {
        workingArr.push(currentNode.next);
      }
    }
    return arr[Math.floor(arr.length/2)];
  }

  