class Node {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

const a = new Node("a")
const dup = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")


a.next = dup
dup.next = b
b.next = c
c.next = d

// 2 --> 8 --> 3 --> 7 --> NULL

const capA = new Node("A")
const capB = new Node("B")
const capC = new Node("C")
const capD = new Node("D")

capA.next = capB
capB.next = capC
capC.next = capD

// PRINTING LINKED LIST

const printLink = (head) => {
    let current = head
    while (current !== null) {
        console.log(current.val)
        current = current.next
    }
}

// RETURNING VALUES OF LINKED LIST

// const linkedListValues = (head) => {
//     if(head === null) {
//         return
//     }

//     console.log(head.val)
//     linkedListValues(head.next)
// }

// CREATING AN ARRAY OF VALUES OF LINKED LIST

// const linkedListValues = (head) => {
//     let current = head
//     const array = []

//     while(current !== null) {
//         array.push(current.val)
//         current = current.next
//     }
//     return array
// }

// const linkedListValues = (head) => {
//     const array = []
//     fillValues(head, array)
//     return array
// }

// const fillValues = (head, array) => {
//     if (head === null) {
//         return
//     }
//     array.push(head.val)
//     fillValues(head.next, array)
// }

// console.log(linkedListValues(a))

// SUMMING ALL VALUES IN LINKED LIST

// const sumLink = (head) => {
//     let current = head
//     let sum = 0

//     while(current !== null){
//         sum += current.val
//         current = current.next
//     }

//     return sum
// }

// const sumLink = (head) => {
//     if (head === null) return 0;
//     return head.val + sumLink(head.next)
// }

// FIND TARGET IN LINKED LIST

// const findTarget = (head, target) => {
//     let current = head

//     while (current !== null) {
//         if (current.val === target) {
//             return true
//         } else {
//             current = current.next
//         } 
//     }
//     return false
// }

// const findTarget = (head, target) => {
//     if (head === null) {
//         return false
//     } else if (head.val === target) {
//         return true
//     }
//     return findTarget(head.next,target)
// }

// Getting a node at a particular index

// const getNode = (head, index) => {
//     let current = head
//     let count = 0

//     while (current !== null) {
//         if (count === index) {
//             return current
//         }
//         current = current.next
//         count++
//     }
//  return null
// }

// const getNode = (head, index) => {
//     if(head === null) return null;
//     if(index === 0) return head.val;
//     index--
//     return getNode(head.next,index)

// }

// Reverse Linked List

// const reverseLink = (head) => {
//     let current = head
//     let previous = null

//     while (current !== null) {
//         let next = current.next
//         current.next = previous
//         previous = current
//         current = next
//     }
//     return previous
// }

// const reverseLink = (head, previous = null) => {
//     if (head === null) return previous;
//     let next = head.next
//     head.next = previous
//     return reverseLink(next, head)
// }

// Combining two linked lists

// const zipperLists = (head1, head2) => {
//     let tail = head1
//     let current1 = head1.next
//     let current2 = head2
//     let count = 0

//     while (current1 !== null && current2 !== null) {

//         if(count % 2 === 0) {
//             tail.next = current2
//             current2 = current2.next
//         } else {
//             tail.next = current1
//             current1 = current1.next
//         }
//         tail = tail.next
//         count++
//     }

//     if(current1 !== null) {
//         tail.next = current1
//     }

//     if(current2 !== null) {
//         tail.next = current2
//     }

//     return head1
// }

// function removeDuplicatesFromLinkedList(head) {
//     let current = head
  
//     while (current !== null) {
//       const next = current.next
//       if (current.val === next.val) {
//         current.next = next.next
//         next.next = null
//       }
//       current = next
//     }
//     return head
// }

console.log(printLink(a))
// console.log(removeDuplicatesFromLinkedList(a))