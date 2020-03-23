function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  
  this.push = function(data) {
    return collection.push(data)
  }
  this.pop = function() {
   return collection.pop()
  }
  this.peek = function() {
    return collection[0]
  }
  this.isEmpty = function() {
    return collection.length < 1? true : false
  }
  this.clear = function() {
    return collection.splice(0)
  }
  
}
