var RetiredForagerBee = function(40, 'gamble', 'grey', false) {
  ForagerBee.call(this, age, job, color, canFly);
  this.age = age;
  this.job = job;
  this.color = color;
  this.canFly = canFly
}
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}


