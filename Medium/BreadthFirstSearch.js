class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array) {
      const workingArr = [this];
    
      while (workingArr.length) {
        const node = workingArr.shift();
        array.push(node.name);
  
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          workingArr.push(child);
        }
      }
      return array;
    }
}
  