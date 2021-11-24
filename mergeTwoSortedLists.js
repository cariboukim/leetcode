// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

let list3 = [];
let list4 = [0];

let list5 = [];
let list6 = [];

var mergeTwoLists = function(l1, l2) {

  if (l1.length === 0 && l2.length === 0) return [];

  if (l1.length === 1 && l2.length === 0) {
    return l1;
  } else if (l2.length === 1 && l1.length === 0) {
    return l2;
  }


  for (let i = 0; i < l1.length; i++) {
    if (l2[i] > l1[i])  {
      final.push(l1[i]);
      final.push(l2[i]);
    } else {
      final.push(l2[i]);
      final.push(l1[i]);
    }
  }

  return final;
};

// this works with arrays but we have to use linked lists, as listed in the example above, so we have to use certain functions as shown in this example

// recursive example of using linkedList functions

var mergeTwoLists = function(l1, l2) {

  if(!l1) return l2;
  if(!l2) return l1;

  if(l1.val < l2.val){
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  }else{
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
};

console.log(mergeTwoLists(list1, list2));
console.log(mergeTwoLists(list3, list4));
console.log(mergeTwoLists(list5, list6));