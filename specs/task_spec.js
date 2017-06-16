var assert = require('assert');
var Task = require('../task.js');

describe("Task Tests", function() {

  var task;

  beforeEach("Setup", function() {
    task = new Task(1, 5, 30, true);
  });

  it("Task should have a difficulty level", function() {
    assert.equal(1, task.difficulty);
  });

  it("Task should have a urgency level", function() {
    assert.equal(5, task.urgency);
  });
 
  it("Task should have a reward", function() {
    assert.equal(30, task.reward);
  });

  it("Task should be marked as complete", function() {
    assert.equal(true, task.complete);
  });

})