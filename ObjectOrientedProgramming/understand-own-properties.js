function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let own in canary) {
  if(canary.hasOwnProperty(own)) {
    ownProps.push(own)
  }
}