var assert = require('assert');
var Hero = require('../hero.js');
var Food = require("../food.js");
var Task = require("../task.js");

describe("Hero Tests", function() {

  var hero;

  var task1;
  var task2;
  var task3;
  var task4;

  var food1;
  var food2;

  beforeEach("Setup", function() {
    hero = new Hero("Superman", 10, "Steak", true);

    food1 = new Food("Salad", 1);
    food2 = new Food("Steak", 10);

    task1 = new Task("Change into outfit", 1, 10, 1, true);
    task2 = new Task("Stop speeding bus", 5, 150, 4, true);
    task3 = new Task("Smack Lex Luthor", 3, 20, 130, true);
    task4 = new Task("Save World", 1000, 100, 120, false);
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

  it("Should start with an empty stomach", function() {
    assert.equal(0, hero.foods.length);
  });

  it("Should be able to eat food", function() {
    hero.addFood(food1);
    assert.equal(1, hero.foods.length);
  });

  it("Should be able to list stomach contents", function() {    
    hero.addFood(food1);
    assert.equal("Name: Salad, Replenishment Value: 1", hero.listFoods()[0]);
  });

  it("Hero should start with an empty task list", function() {
    assert.equal(0, hero.tasks.length);
  });

  it("Should be able to add a task to the task list", function() {
    hero.addTask(task1);
    assert.equal(1, hero.tasks.length);
  });

  it("Should be able to add multpile tasks to the task list", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.addTask(task4);
    assert.equal(4, hero.tasks.length);
  });

  it("Should be able to list the tasks", function() {    
    hero.addTask(task1);
    assert.equal("Description: Change into outfit, Difficulty: 1, Urgency: 10, Reward: 1, Completed: true", hero.listTasks()[0]);
  });

  it("Should be able to eat non-favourite food and health goes up", function() {
    hero.addFood(food1);
    assert.equal(11, hero.checkHealth());
  });

  it("Should be able to eat favourite food and health goes up", function() {
    hero.addFood(food2);
    assert.equal(25, hero.checkHealth());
  });

  // it("Should be able to sort tasks by difficulty", function(difficulty) {
  //   hero.addTask(task1);
  //   hero.addTask(task2);
  //   hero.addTask(task3);
  //   hero.addTask(task4);
  //   var myTaskList = hero.listTasks();
  //   for( task in myTaskList ) {
  //     console.log("task before criteria is:", task);
  //   } 
  //   hero.listTasksByCriteria();
  //   var mySortedTaskList = hero.listTasks();
  //   for( task in mySortedTaskList ) {
  //     console.log("task after criteria is:", task);
  //   } 
  //   // assert.equal("Description: Save World, Difficulty: 1000, Urgency: 100, Reward: 120, Completed: false", hero.listTasks()[0]);
  // });

  it("Should be able to sort tasks by difficulty", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.addTask(task4);
    hero.listTasksByDifficulty();
    assert.equal("Description: Save World, Difficulty: 1000, Urgency: 100, Reward: 120, Completed: false", hero.listTasks()[0]);
  });

  it("Should be able to sort tasks by urgency", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.addTask(task4);
    hero.listTasksByUrgency();
    assert.equal("Description: Stop speeding bus, Difficulty: 5, Urgency: 150, Reward: 4, Completed: true", hero.listTasks()[0]);
  });

  it("Should be able to sort tasks by reward", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.addTask(task4);
    hero.listTasksByReward();
    assert.equal("Description: Smack Lex Luthor, Difficulty: 3, Urgency: 20, Reward: 130, Completed: true", hero.listTasks()[0]);
  });

  it("Should be able to show tasks completed", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.addTask(task4);
    var completedTasks = hero.listCompletedTasks();
    assert.equal(3, completedTasks.length);
  });

})