var Bee = function(5, 'yellow') {
  Grub.call(this, age, color);
  this.age = age;
  this.color = color;
  this.job = 'keep on growing';
};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

