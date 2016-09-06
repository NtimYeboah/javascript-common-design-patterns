var Task = function(data){
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.false;
}

Task.prototype.complete = function(){
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log('save Task: ' + this.name);
}

module.exports = Task;
