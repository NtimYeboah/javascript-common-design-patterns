var TaskRepo = (function(){
	var taskRepo;
	function createRepo(){
		var taskRepo = new Object({name: 'Obed'});
		return taskRepo;
	}

	return {
		getInstance: function(){
			if (!taskRepo){
				taskRepo = createRepo();
			}
			return taskRepo;
		}
	}
})();

var repo1 = TaskRepo.getInstance();
console.log(repo1);
var repo2 = TaskRepo.getInstance();
console.log(repo2);

