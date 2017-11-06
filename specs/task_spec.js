var assert = require('assert');
var Task = require('../task.js');

describe("Task Tests", function() {

  var task;

  beforeEach("Setup", function() {
    task = new Task("Change outfit", 1, 5, 30, true);
  });

  it("Task should have a description", function() {
    assert.equal("Change outfit", task.description);
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

  it("Prints out all task details as a string", function() {
    task1 = new Task("Change into outfit", 1, 10, 10, true);
    assert.equal("Description: Change into outfit, Difficulty: 1, Urgency: 10, Reward: 10, Completed: true", task1.printFullDetails());
  });

})