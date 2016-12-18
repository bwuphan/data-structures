

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);


  var value = this._storage.get(index);
  if(value !== undefined){
    var matched = false
    for(var i = 0; i < value.length; i++){
      if(value[i][0] === k){
        matched = true;
        value[i][1] = v;
      }
    }
    if(matched === false){
      value.push([k,v])
    }
    this._storage.set(index, value);
  } else {
    this._storage.set(index, [[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i++){
    if(k === bucket[i][0]) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i++) {
    if(k === bucket[i][0]) {
      var removed = bucket[i][1];
      bucket[i].splice(1);
    }
  }
  return removed;
};



/*
 * Complexity: What is the time complexity of the above functions?
 All are O(1)
 */


