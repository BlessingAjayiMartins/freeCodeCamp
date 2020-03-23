// the global variable
var fixedValue = 4;

function incrementer () {
  let result = fixedValue + 1
  return result
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
