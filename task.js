function Task(description, difficulty, urgency, reward, complete) {
  this.description = description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = complete;
}

Task.prototype = {

  printFullDetails: function(){
    return "Description: " + this.description + ", Difficulty: " + this.difficulty + ", Urgency: " + this.urgency + ", Reward: " + this.reward + ", Completed: " + this.complete;
  }
}

module.exports = Task;