var Task = function(difficultyLevel, urgencyLevel, reward){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.completed = false;
}

Task.prototype.complete = function () {
    this.completed = true;
};

module.exports = Task;
