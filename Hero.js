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



module.exports = Hero;
