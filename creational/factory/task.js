var taskRepo = require('./taskRepo')();

var Task = function(data){
	this.name = data.name;
	this.completed = false;
}

Task.prototype.complete = function(){
	console.log('completing task: ' + this.name);
	this.completed = true;
}

Task.prototype.save = function(){
	console.log('save Task: ' + this.name);
	taskRepo.save(this);
}

module.exports = Task;