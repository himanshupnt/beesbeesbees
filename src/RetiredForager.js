var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.oldForage = RetiredForagerBee.prototype.forage;

//Q why this doesn't work :
  // RetiredForagerBee.prototype.oldForage = RetiredForagerBee.forage;
//A the RetiredForagerBee object hasn't been created yet using new keyword.

// console.log(RetiredForagerBee.forage);

RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead';
};
RetiredForagerBee.prototype.gamble = function (treasure) {
  this.oldForage(treasure);
};
