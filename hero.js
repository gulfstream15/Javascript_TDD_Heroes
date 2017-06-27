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
    });
    return tasksList;
  },

  addFood: function(food) {
    this.foods.push(food);
    if (food.name === this.fav_food) {
       this.health = this.health + food.replen_value * 1.5;
    } else {
       this.health += food.replen_value;
    }
  },

  listFoods: function() {
    var foodsList = this.foods.map(function(food) {
      return food.printFullDetails()
    });
    return foodsList;
  },

  checkHealth: function() {
     return this.health;
  },

  listTasksByDifficulty: function() {
    var sortedListByDifficulty = this.tasks.sort(function (taskOne, taskTwo) {
       return taskOne.difficulty < taskTwo.difficulty;
    });
    return sortedListByDifficulty;
  },

  listTasksByUrgency: function() {
    var sortedListByUrgency = this.tasks.sort(function (taskOne, taskTwo) {
       return taskOne.urgency < taskTwo.urgency;
    });
    return sortedListByUrgency;
  },

  listTasksByReward: function() {
    var sortedListByReward = this.tasks.sort(function (taskOne, taskTwo) {
       return taskOne.reward < taskTwo.reward;
    });
    return sortedListByReward;
  },

  // listTasksByCriteria: function(criteria) {
  //   var sortedListByCriteria = this.tasks.sort(function (taskOne, taskTwo) {
  //      return taskOne[criteria] < taskTwo[criteria];
  //   });
  //   return sortedListByCriteria;
  // },

  listCompletedTasks: function() {
    var completedTasksList;
    for( task in this.tasks ) {
      if (task.complete === true) {
        completedTasksList.push(task);
      }
    } 
    return completedTasksList;
  }

  // addFood: function(food) {
  //   this.foods.push(food);
  //   if (food.name === this.fav_food) {
  //      this.health = this.health + food.replen_value * 1.5;
  //   } else {
  //      this.health += food.replen_value;
  //   }
  // },


}

module.exports = Hero;
