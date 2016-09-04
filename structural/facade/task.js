var Task = function(data){
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
}

var TaskService = function(){
	return {
		completed: function(task){
			task.completed = true;
			console.log('completing task: ' + task.name);
		},

		setCompleteDate: function(task){
			task.completedDate = new Date();
			console.log(task.name + ' completed on ' + task.completedDate);
		},

		notifyCompletion: function(task, user){
			console.log('Notifying ' + user + ' of the completion of ' + task.name);
		},

		save: function(task){
			console.log('saving Task: ' + task.name);
		}
	}
}();

var TaskServiceWrapper = function(){
	var completeAndNotify = function(task){
		TaskService.completed(task);
		if(task.completed == true){
			TaskService.setCompleteDate(task);
			TaskService.notifyCompletion(task, task.user);
			TaskService.save(task);
		}
	}

	return {
		completeAndNotify: completeAndNotify
	}
}();

var Task = new Task({
	name: 'MyTask',
	priority: 1,
	project: 'Courses',
	user: 'Jon',
	completed: false
});

//console.log(Task);
TaskServiceWrapper.completeAndNotify(Task);



//console.log(Task);
