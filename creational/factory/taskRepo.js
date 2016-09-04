var taskRepo = function(){

	var db = {};

	function get(id){
		console.log('Getting task ' + id);
		return {
			name: 'new task from db'
		}
	}

	function save(task){
		console.log('saving ' + task.name + ' to the db');
	}
	console.log('newing up task repo');
	return {
		get: get,
		save: save
	}
};

module.exports = taskRepo;