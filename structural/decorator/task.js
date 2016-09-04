var Task = function(name){
	this.name = name;
	this.completed = false;
}

Task.prototype.complete = function(){
	console.log('completing task: ' + this.name);
	this.completed = true;
}

Task.prototype.save = function(){
	console.log('save Task: ' + this.name);
}

var myTask = new Task('Legacy task');
myTask.complete();
myTask.save();


var urgentTask = new Task('Urgent task');
urgentTask.priority = 2;
urgentTask.notify = function(){
	console.log('notifying important people');
}

urgentTask.complete();
urgentTask.save = function(){
	this.notify();
	Task.prototype.save.call(this);
}

urgentTask.save();
