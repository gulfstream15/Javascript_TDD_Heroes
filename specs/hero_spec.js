var assert = require('assert');
var Hero = require('../hero.js');
var Food = require("../food.js");
var Task = require("../task.js");

describe("Hero Tests", function() {

  var hero;
  var food;
  var task1;

  beforeEach("Setup", function() {
    food = new Food("Lasagne", 5);
    task1 = new Task("Change into outfit", 1, 10, 10, true);
    hero = new Hero("Superman", 10, "Steak", true, true);
  });

  it("Hero should have a name", function() {
    assert.equal("Superman", hero.name);
  });

  it("Hero should have health", function() {
    assert.equal(10, hero.health);
  });

  it("Hero has a favourite food", function() {
    assert.equal("Steak", hero.fav_food);
  });

  it("Hero can say name", function() {
    assert.equal(true, hero.can_say_name);
  });

  it("Hero can eat food", function() {
    assert.equal(true, hero.can_eat_food);
  });

  it("Hero should start with an empty task list", function() {
    assert.equal(0, hero.tasks.length);
  });

  it("Should be able to add a task to the task list", function() {
    hero.addTask(task1);
    assert.equal(1, hero.tasks.length);
  });

  it("Should be able to list the tasks", function() {    
    hero.addTask(task1);
    assert.equal("Description: Change into outfit, Difficulty: 1, Urgency: 10, Reward: 10, Completed: true", hero.listTasks()[0]);
  });


})