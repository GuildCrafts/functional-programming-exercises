export default function reduce(head, f, init) {
  if(!head) { return 0 }
  var acc = init
  var currentNode = head
  while(currentNode) {
    acc = f(acc,currentNode.data)
    currentNode = currentNode.next
  }
  return acc;
}
