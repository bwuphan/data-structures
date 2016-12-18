

// Instantiate a new graph
var Graph = function() {
  //var counter = 0;
  this.counter = 0;
  this.storage = {};
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {
    value: node,
    pointedTo: []
  }
  this.storage[this.counter] = newNode;
  this.counter++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var key in this.storage){
    if(this.storage[key].value === node){
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var key in this.storage) {
    if(this.storage[key].value === node) {
      delete this.storage[key];
    }
  }
  for(var key in this.storage) {
    var thisObject = this.storage[key];
    for(var i = 0 ; i < thisObject.pointedTo.length; i++) {
      var index = thisObject.pointedTo.indexOf(node)
      if(index > -1) {
        thisObject.pointedTo.splice(index,1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for(var key in this.storage){
    if(this.storage[key].value === fromNode || this.storage[key].value === toNode){
      for(var i = 0; i < this.storage[key].pointedTo.length; i++){
        if(this.storage[key].pointedTo[i] === fromNode || this.storage[key].pointedTo[i] === toNode){
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for(var key in this.storage) {
    var thisObject = this.storage[key];
    if(thisObject.value === fromNode) {
      if(thisObject.pointedTo.indexOf(toNode) === -1) {
        thisObject.pointedTo.push(toNode);
      }
    }
    if(thisObject.value === toNode) {
      if(thisObject.pointedTo.indexOf(fromNode) === -1) {
        thisObject.pointedTo.push(fromNode);
      }
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
   for(var key in this.storage) {
    var thisObject = this.storage[key];
    if(thisObject.value === fromNode) {
      var index = thisObject.pointedTo.indexOf(toNode);
      thisObject.pointedTo.splice(index,1);
    }
    if(thisObject.value === toNode) {
      var index = thisObject.pointedTo.indexOf(fromNode);
      thisObject.pointedTo.splice(index,1);
    }
  }
};
/*
var arr = [3,6,8];
var d = arr;

d.slice(1);
console.log(arr)
*/
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var key in this.storage){
    cb(this.storage[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(n) for all
 */


