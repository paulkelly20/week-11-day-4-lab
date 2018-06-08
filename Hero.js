var Hero = function(name, favouriteFood, tasks){
    this.name = name;
    this.favouriteFood = favouriteFood;
    this.tasks = tasks;
    this.health = 100;
    this.backpack = [];
  };

Hero.prototype.talk = function () {
  return "Hello my name is " + this.name;
};

Hero.prototype.eat = function (food) {
  if(food.name === this.favouriteFood){
    this.health += food.replenishmentValue * 1.5;
  }
  else this.health += food.replenishmentValue;
};



module.exports = Hero;
