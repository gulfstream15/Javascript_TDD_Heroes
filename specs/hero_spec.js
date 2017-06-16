var assert = require('assert');
var Hero = require('../hero.js');

describe("Hero Tests", function() {

  var hero;

  beforeEach("Setup", function() {
    hero = new Hero("Superman", "Fit", "Steak", "Superman", ["Change into outfit", "Save World"]);
  });

  it("Hero should have a name", function() {
    assert.equal("Superman", hero.name);
  });

  it("Hero should have health", function() {
    assert.equal("Fit", hero.health);
  });

  it("Hero has a favourite food", function() {
    assert.equal("Steak", hero.fav_food);
  });

  it("Hero can say name", function() {
    assert.equal("Superman", hero.can_say_name);
  });

  it("Hero has a collection of tasks", function() {
    assert.deepEqual(["Change into outfit", "Save World"], hero.tasks);
  });

})