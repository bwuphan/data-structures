var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.objectSize = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.objectSize++;
    this.storage[this.objectSize] = value;
  },
  pop: function() {
    var popped = this.storage[this.objectSize];
    delete this.storage[this.objectSize];
    this.objectSize--;
    return popped;
  },
  size: function() {
    if(this.objectSize < 0) {
      return 0;
    }
    return this.objectSize;
  }
};


