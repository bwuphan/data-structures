var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; //{0: "hello", 1: "goodbye"}

  // Implement the methods below
  var objectSize = 0;
  someInstance.push = function(value) {
    objectSize++;
    //put value into storage
    var key = (objectSize).toString();
    storage[key] = value;
  };

  someInstance.pop = function() {
    //remove value
    var popped = storage[objectSize];
    delete storage[objectSize];
    objectSize--;
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
