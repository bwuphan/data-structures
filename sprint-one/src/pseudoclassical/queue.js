var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //this = Object.create(Queue.prototype)
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

Queue.prototype.dequeue = function() {
  if(Object.keys(this.storage).length > 0) {
    var dequeued = this.storage[0];
    delete this.storage[0];
    for(var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    delete this.storage[Object.keys(this.storage).length - 1];
    return dequeued;
  }
}

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
}

