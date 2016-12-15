var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; //{1: "hi", 2: bye} {0: sp,etjomg, 1: asldf}

  // Implement the methods below
  var objectSize = 0;
  someInstance.enqueue = function(value) {
    objectSize++;
    var key = objectSize.toString();
    storage[key] = value;
  };

  someInstance.dequeue = function() {
    objectSize--;
    var popped = storage["1"];
    delete storage["1"];
    for(var key in storage) {
      storage[key - 1] = storage[key];
    }
    return popped;
  };

  someInstance.size = function() {
    if(objectSize < 0) {
      return 0;
    }
    return objectSize;
  };

  return someInstance;
};
