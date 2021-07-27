class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  
size() {
  return this.length
}

add (el) {
    if (this.has(el)) {
       return false
    } else {
      this.dictionary[el] = el
      this.length++
      return true
    }
  }

  remove (el) {
    if (this.has(el)) {
      delete this.dictionary[el]
      this.length--
      return true
    } else {
      return false
    }
  }
  
}