var assert = require('assert');
var Task = require('../Task.js');

var task;

beforeEach(function(){
  task = new Task(100, 20, 50);
});

it("Task has a difficulty level", function(){
  assert.strictEqual(task.difficultyLevel, 100);
});

it("Task has an urgency level", function(){
  assert.strictEqual(task.urgencyLevel, 20);
});

it("Task has a reward", function(){
  assert.strictEqual(task.reward, 50);
});

it("New task isnt completed", function(){
  assert.strictEqual(task.completed, false);
});

it("A task should be able to be marked as completed", function(){
  task.complete()
  assert.strictEqual(task.completed, true);
});
