function Food(name, replen_value) {
  this.name = name;
  this.replen_value = replen_value;
}

Food.prototype = {

  printFullDetails: function(){
    return "Name: " + this.name + ", Replenishment Value: " + this.replen_value;
  }
}

module.exports = Food;