class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
const g = new Node(7);
const h = new Node(8);
const i = new Node(9);
// const j = new Node(10);

a.right = c;
a.left = b;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
d.right = i;

function invertBinaryTree (Node) {
    const workingArr = [Node];

  while (workingArr.length) {
    const node = workingArr.pop();
    
    if (node !== null) {
      const left = node.left;
      const right = node.right;
      
      if (right || left) {
        node.left = right;
        node.right = left;
        workingArr.push(left, right);
      }
    }
  }
  return Node;
}

console.log(invertBinaryTree(Node))
