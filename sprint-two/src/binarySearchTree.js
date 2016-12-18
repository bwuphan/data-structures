var BinarySearchTree = function(value) {
  var binaryTree = {};
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.value = value;
  _.extend(binaryTree, BinarySearchTreeMethods);
  return binaryTree;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
  var newTree = BinarySearchTree(value);
  //var correctNode;
  var insertNode = function(node) {
    if(value > node.value) {
      if(node.right === null) {
        node.right = newTree;
      } else {
        insertNode(node.right);
      }
    } else if(value < node.value) {
      if(node.left === null) {
        node.left = newTree;
      } else {
        insertNode(node.left);
      }
    }
  }
  insertNode(this);
}

BinarySearchTreeMethods.contains = function(value) {
  if(value === this.value){
    return true;
  }
  if(this.left === null && this.right === null){
    return false;
  }
  if(value > this.value){
    if(this.right === null) {
      return false;
    }
    return this.right.contains(value);
  }
  if(value < this.value){
    if(this.left === null) {
      return false;
    }
    return this.left.contains(value);
  }
}

BinarySearchTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if(this.right !== null){
    this.right.depthFirstLog(callback);
  }
  if(this.left !== null){
    this.left.depthFirstLog(callback);
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 for insert and contains Ologn.
 for depthFirstLog since it is iterating thru all it is O(n)
 */
