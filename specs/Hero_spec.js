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
  hero = new Hero("Paul", "Chicken", taskCollection )
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

it("Hero can Talk", function(){
  assert.strictEqual(hero.talk(), "Hello my name is Paul")
});

it("Hero has a collection of tasks to complete", function(){
  assert.strictEqual(hero.tasks.length, 3)
});

it("Hero has a empty backpack", function(){
  assert.strictEqual(hero.backpack.length, 0)
});

it("Hero eats food and health goes up", function(){
  hero.eat(food);
  assert.strictEqual(hero.health, 120);
});

it("Hero eats favourite food and health goes up", function(){
  hero.eat(food2);
  assert.strictEqual(hero.health, 115);
});

xit("Hero sorts tasks by difficultyLevel", function(){
  assert.deepStrictEqual(hero.sortTasks("difficultyLevel"), task3);
});

it("Hero finds uncompleted tasks", function(){
  task.complete()
  assert.deepStrictEqual(hero.findUncompletedTasks(), [task2, task3]);
})
