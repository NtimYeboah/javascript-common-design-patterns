var repoFactory = function(){

	this.getRepo = function(repoType){
		if(repoType === 'task'){
			if(this.taskRepo){
				console.log('Retrieving from cache');
				return this.taskRepo;
			} else {
				var taskRepo = require('./taskRepo')();
				return taskRepo;
			}
			
		}
		if(repoType === 'user'){
			var userRepo = require('./userRepo')();
			return userRepo;
		}
		if(repoType === 'project'){
			var projectRepo = require('./projectRepo')();
			return projectRepo;

		}
	}
}

module.exports = new repoFactory;