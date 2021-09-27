var ForagerBee = function(10, 'find pollen') {
  Bee.call(this, age, job);
  this.age = age;
  this.job = job;
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}


