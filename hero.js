function Hero(name, health, fav_food, can_say_name, can_eat_food) {
  this.name = name;
  this.health = health;
  this.fav_food = fav_food;
  this.can_say_name = can_say_name;
  this.can_eat_food = can_eat_food;
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
  }

  // getReplenished: function(can_eat_food) {
  //   if (this.can_eat_food === true) {
  //     return "Sorry you can't afford this record";
  //   }
  //   this.cash -= record.price;
  //   this.collection.push(record);
  // }

}

module.exports = Hero;