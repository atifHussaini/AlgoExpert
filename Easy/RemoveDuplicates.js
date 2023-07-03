// classes and OPP(object orientated programming)
// class Node {
//     constructor (data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor (head = null) {
//         this.head = head;
//         this.size = 0;
//     }

//     // Insert first node
//     insertHead(data) {
//         this.head = new Node(data, this.head)
//         this.size++
//     }

//     // Insert last node
//     insertLast(data) {
//         let node = new Node(data)
//         let current;

//         //if there is no head
//         if(!this.head){
//             this.head = node
//         } else {
//             current = this.head

//             while(current.next){
//                 current = current.next
//             }

//             current.next = node
//         }
//         this.size++
//     }
//     // Insert at index
//     insertAt(data, index){
         
//         // If index is out of range
//         if (index < 0 || index > this.size) {
//             return
//         }

//         // If first index
//         if (index === 0) {
//             this.insertHead(data)
//             return
//         }

//         const node = new Node(data)
//         let current
//         let previous

//         current = this.head
//         let count = 0

//         while(count < index) {
//             previous = current // Node before index
//             count++
//             current = current.next // Noode after index
//         }

//         node.next = current 
//         previous.next = node

//         this.size++ 
//     }

//     // Get at index
//     getAt(index) {
//         let current = this.head
//         let count = 0

//         while(current) {
//             if (count === index) {
//                 console.log(current.data)
//             }
//             count++
//             current = current.next
//         }

//         return null;
//     }

//     // Remove at index
//     removeAt(index) {
//         if (index < 0 || index > this.size) {
//             return
//         } 

//         let count = 0
//         let current = this.head
//         let previous

//         // Remove first
//         if(index === 0){
//             this.head = current.next
//         } else {

//             while(count < index) {
//                 previous = current
//                 current = current.next
//                 count++
//             }

//             previous.next = current.next 
//         }

//         this.size--
//     }

//     // Clear list
//     clearList() {
//         this.head = null
//         this.size = 0
//     }

//     // Print list data
//     printData () {
//         let current = this.head

//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }

// const linkList = new LinkedList()

// linkList.insertHead(5)
// linkList.insertHead(4)
// linkList.insertHead(3)
// linkList.insertHead(2)
// linkList.insertHead(1)
// linkList.insertLast(6)
// linkList.insertAt(2.5,2)

// linkList.removeAt(2)

// linkList.clearList()
// linkList.printData()

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    let current = linkedList;
    
    while (current.next !== null) {
      if (current.value === current.next.value) {
        current.next = current.next.next;
        current = current;
      } else {
        current = current.next;
      }
    }
    return linkedList;
  }

