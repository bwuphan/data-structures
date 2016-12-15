var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.objectSize = 0;
  instance.storage = {};
  return instance;
};


var queueMethods = {
  enqueue: function(value){
    this.objectSize++;
    this.storage[this.objectSize] = value;
  },
  dequeue: function(){
    if(Object.keys(this.storage).length > 0){
      var dequeued = this.storage["1"];
      delete this.storage["1"];
      for(var key in this.storage){
        this.storage[key - 1] = this.storage[key];
      }
      delete this.storage[this.objectSize];
      this.objectSize--;
      return dequeued;
    }
  },
  size: function(){
    if(this.objectSize < 0){
      return 0;
    }
    return this.objectSize;
  }
};


