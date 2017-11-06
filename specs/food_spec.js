var assert = require('assert');
var Food = require('../food.js');

describe("Food Tests", function() {

  var food;

  beforeEach("Setup", function() {
    food = new Food("Salad", 1);
  });

  it("Food should have a name", function() {
    assert.equal("Salad", food.name);
  });

  it("Food should have a replenishment value", function() {
    assert.equal(1, food.replen_value);
  });

})