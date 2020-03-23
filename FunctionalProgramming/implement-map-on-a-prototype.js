// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
 
  this.forEach(a => newArray.push(callback(a)))
  
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
