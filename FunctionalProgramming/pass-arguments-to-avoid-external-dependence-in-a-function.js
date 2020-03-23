// the global variable
var fixedValue = 4;

function incrementer (num) {
  let result = num + 1
  return result 
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
