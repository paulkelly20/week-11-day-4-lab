var assert = require('assert');
var Task = require('../Task.js');
var Food = require('../Food.js');
var Hero = require('../Hero.js');

var food;
var food2;
var task;
var task2;
var task3;
var hero;

beforeEach(function(){
  food = new Food("Steak", 20);
  food2 = new Food("Chicken", 10);
  task = new Task(20, 100, "Car");
  task2 = new Task(30, 5, "House");
  task3 = new Task(40, 40, "Speedboat");
  taskCollection = [task, task2, task3];
  hero = new Hero("Paul", "Chicken",taskCollection )
});

it("Hero has a name", function(){
  assert.strictEqual(hero.name, "Paul");
});

it("Hero has health", function(){
  assert.strictEqual(hero.health, 100);
});

it("Hero has a favourite food", function(){
  assert.strictEqual(hero.favouriteFood, "Chicken");
});
