/**
 * @param {ListNode} head
 * @return {number[]}
 */

var reversePrint = function(head){
  const res = []
  while(head){
    res.unshift(head.val)
    head = head.next
  }
  return res
}

