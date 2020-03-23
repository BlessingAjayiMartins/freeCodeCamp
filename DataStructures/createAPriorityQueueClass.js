function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  
  this.enqueue = function([data, num]) {
    let a = 0;
      while (a < this.collection.length && num >= this.collection[a][1]) {
        a++
      }
    let firstHalf = this.collection.slice(0, a)
    firstHalf.push([data, num])
    let backHalf = this.collection.slice(a)
    this.collection = [...firstHalf,...backHalf]
  }

  this.findPriority = function() {
    return this.collection.sort(function(a,b) {a[1] - b[1]})
  }

  this.dequeue = function() {
    let removeEl = this.collection[0][0]
    this.collection.shift()
    return removeEl
  }
  this.size = function() {
    return this.collection.length
  }
  this.front = function() {
    return this.collection[0]
  }
  this.isEmpty = function() {
    return this.collection.length == 0
  }
  return this

}