/*
Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null: next)
}

@param {ListNode} head
@return {ListNode}
*/

let test1 = [1, 1, 2, 3, 3];

// initial solution

// var deleteDuplicates = function(head) {
//   console.log(head);
//   let list = new ListNode(head.val);
//   console.log(list);
//   console.log(head.val);

//   while (head !== null) {
//     if (head.val !== head.next) {
//       list.next = new ListNode(head.val);
//       head = head.next;
//     } else {
//       list = list.next
//     }
//   }

//   return list;
// };

// discussion leetcode solution

var deleteDuplicates = (head) => {
  let currentNode = head;
  let prevNode = null;

  while(currentNode) {
    if (prevNode && prevNode.val === currentNode.val) {
      prevNode.next = currentNode.next;
      currentNode = currentNode.next;
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  return head;
}