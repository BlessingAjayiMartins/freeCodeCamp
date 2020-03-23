function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];


for(let own in beagle) {
  if(beagle.hasOwnProperty(own)) {
    ownProps.push(own)
  } else {
    prototypeProps.push(own)
  }
}