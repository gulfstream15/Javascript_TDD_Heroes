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
  },

  listFoods: function() {
    var foodsList = this.foods.map(function(food) {
      return food.printFullDetails()
    })
    return foodsList;
  }

  // eatFoodGetReplenished: function(food) {
  //    this.health =+ food.replen_value;
  // }

  // getReplenished: function(can_eat_food) {
  //   if (this.can_eat_food === true) {
  //     return "Sorry you can't afford this record";
  //   }
  //   this.cash -= record.price;
  //   this.collection.push(record);
  // }

}

module.exports = Hero;