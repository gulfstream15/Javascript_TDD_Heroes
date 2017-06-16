function Hero(name, health, fav_food, can_say_name, tasks) {
  this.name = name;
  this.health = health;
  this.fav_food = fav_food;
  this.can_say_name = can_say_name;
  this.tasks = tasks;
}

module.exports = Hero;