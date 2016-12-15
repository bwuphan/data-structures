var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {objectSize: 0, storage: {}};
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.objectSize++;
    this.storage[this.objectSize] = value;
  },
  dequeue: function() { // {1: 2, 2: 3} ----> {0:2, 1:3}
    var popped = this.storage["1"];
    for(var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    delete this.storage['0'];
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


