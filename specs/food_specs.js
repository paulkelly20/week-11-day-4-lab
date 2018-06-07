var assert = require('assert');
var Food = require('../Food.js');

var food;

beforeEach(function(){
  food = new Food("Cheese", 20);
});


it("Food should have a name", function(){
  assert.strictEqual(food.name, "Cheese");
});
