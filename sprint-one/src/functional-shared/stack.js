var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style
  var someInstance = {storage: {}, objectSize: 0};//works if we put object size as a property of someInstance
  /*var storage = {}; //storage should be a property of someInstance
  objectSize = 0;*/
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  //methods - pop, push, size
  push: function(value){
    this.objectSize++;
    var key = (this.objectSize).toString();
    this.storage[key] = value;
  },

  pop: function(){
    var popped = this.storage[this.objectSize];
    delete this.storage[this.objectSize];
    this.objectSize--;
    return popped;
  },

  size: function(){
    if(this.objectSize < 0){
      return 0;
    }
    return this.objectSize;
  }
};


