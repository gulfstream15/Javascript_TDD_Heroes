function Hero(name, health, fav_food, can_say_name) {
  this.name = name;
  this.health = health;
  this.fav_food = fav_food;
  this.can_say_name = can_say_name;
  this.foods = [];
  this.tasks = [];
}

Hero.prototype = {

  addTask: function(task) {
    this.tasks.push(task);
  },

  listTasks: function() {
    var tasksList = this.tasks.map(function(task) {
      return task.printFullDetails()
    })
    return tasksList;
  },

  addFood: function(food) {
    this.foods.push(food);
    this.health += food.replen_value;
  },

  listFoods: function() {
    var foodsList = this.foods.map(function(food) {
      return food.printFullDetails()
    })
    return foodsList;
  },

  checkHealth: function() {
     return this.health;
  }


}

module.exports = Hero;