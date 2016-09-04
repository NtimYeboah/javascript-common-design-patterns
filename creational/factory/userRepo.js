var userRepo = function(){

	var db = {};

	function get(id){
		console.log('Getting user ' + id);
		return {
			name: 'new user from db'
		}
	}
	
	return {
		get: get
	}
};

module.exports = userRepo;