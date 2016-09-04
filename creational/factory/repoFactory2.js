var repoFactory = function(){

	var repos = this;
	var repoList = [{name: 'task', source: './taskRepo'},
					{name: 'user', source: './userRepo'},
					{name: 'project', source: './projectRepo'}];

	repoList.forEach(function(repo){
		repos[repo.name] = require(repo.source)();
	});
}

module.exports = new repoFactory;