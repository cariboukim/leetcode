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

var deleteDuplicates = function(head) {
  console.log(head);
  let list = new ListNode(head.val);
  console.log(list);
  console.log(head.val);

  while (head !== null) {
    if (head.val !== head.next) {
      list.next = new ListNode(head.val);
      head = head.next;
    } else {
      list = list.next
    }
  }

  return list;
};