var projectRepo = function(){

	var db = {};

	function get(id){
		console.log('Getting project ' + id);
		return {
			name: 'new project from db'
		}
	}
	
	return {
		get: get
	}
};

module.exports = projectRepo;