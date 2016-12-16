var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var boolean = false;
  function traverseTree(node){
    if(node.value === target) {
      boolean = true;
      return boolean;
    }
    for(var i = 0 ; i < node.children.length; i++) {
      traverseTree(node.children[i])
    }
  }
  //
  traverseTree(this)
  return boolean;
  //for(go thru the tree that you pass in's children)
  //inside the loop, we recall the same function but pass in child[i]
  /*if(this.value === target) {
    return true;
  }
  for(var i = 0; i < this.children.length; i++) {
    this.children[i].contains(target);
  }
  return false;*/
};

/*
{
  value:
  children:[{
    value:
    children: [];
  },{},{},]
}

{
  value: asdf
  children:[{},{},{},{},{
    value: VALUE,
    children: []
  }]
}
*/
/*
 * Complexity: What is the time complexity of the above functions?
 */
