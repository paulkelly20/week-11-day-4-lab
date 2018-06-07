var assert = require('assert');
var Task = require('../Task.js');

var task;

beforeEach(function(){
  task = new Task(100, 20, "Gold");
});

it("Task has a difficulty level", function(){
  assert.strictEqual(task.difficultyLevel, 100);
});

it("Task has an urgency level", function(){
  assert.strictEqual(task.urgencyLevel, 20);
});

it("Task has a reward", function(){
  assert.strictEqual(task.reward, "Gold");
});
