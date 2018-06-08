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

Hero.prototype.sortTasks = function (taskPropertyToSort) {
  this.tasks.sort(function (a, b) {
    console.log(taskPropertyToSort);
    return b.taskPropertyToSort - a.taskPropertyToSort;
  }); return this.tasks[0];
};

Hero.prototype.findUncompletedTasks = function () {
var uncompletedTasks =  this.tasks.filter(task => task.completed === false);
return uncompletedTasks;
};



module.exports = Hero;
