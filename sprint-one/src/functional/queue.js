var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; // {0: sp,etjomg, 1: asldf}

  // Implement the methods below
  //var Object.keys.length = Object.keys(storage);
  someInstance.enqueue = function(value) {
    //Object.keys.length++;
    var key = Object.keys(storage).length.toString();
    storage[key] = value;
  };

  someInstance.dequeue = function() {
    //Object.keys.length--; {1: a, 2:b 3:c} ----> { 2:b 3:c} ----- > {1: b, 2:b 3:c} ------>
    var popped = storage["0"];
    delete storage["0"];
    for(var key in storage) {
      storage[key - 1] = storage[key];
    }
    delete storage[Object.keys(storage).length - 1];
    console.log(storage)
    console.log("popped " + popped);
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  }

  return someInstance;
};
