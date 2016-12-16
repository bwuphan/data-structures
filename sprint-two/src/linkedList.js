var LinkedList = function() {//{0: "a", 1: "b", 2: "c"}
  var list = {};
  list.head = null; //points to first in list
  list.tail = null; //points to last item
  //{head = null, tail = null}
  list.addToTail = function(value) {
    var addedNode = Node(value);
    if(list.head === null){
      list.head = addedNode;
    } else {
      list.tail.next = addedNode;
      //find what the tail is pointing to
      //have that node point to addedNode
      //have tail point to addedNode
    }
    list.tail = addedNode;
  };

  list.removeHead = function() {
    //find what the head is pointing to
    //keep variable for what the head is pointing to
    //make the head point to the "x" or the 2nd node
    //return the var we made earlier
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(target) {
    //inner function would take a node as a parameter
    //if target matches value, return true
    //if node.next === null return false
    //return the inner function pass in node.next
    var findTarget = function(node) {
      if(node.value === target) {
        return true;
      }
      if(node.next === null) {
        return false;
      }
      return findTarget(node.next);
    }
    return findTarget(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/*
{
  value:
  next: {
    value:
    next:{

    }
  }
}
*/
/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: O(1)
 removeHead: O(1)
 contains: O(n)
 */
