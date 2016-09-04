function Callens(data){
  this.name = data.name;
  this.department = data.department;
  this.observerList = [];
}

Callens.prototype.addObserver = function(observer){
  this.observerList.push(observer);
}

Callens.prototype.get = function(index){
  if(index > -1 && index < this.observerList.length){
    return this.observerList[index];
  }
}

Callens.prototype.save = function(){
  this.notify();
  console.log('Save ' + this.name);
}

Callens.prototype.notify = function(context){
  this.observerList.map(function(observer, index){
    observer(context);
  });
}

function Notification(){
  var message = "Hehe Notification is called.";
  this.update = function(){
    console.log(message + " with Callens");
  }
}

var employee = new Callens({name: "Benjamin", department: "Software Engineering"});
var notification = new Notification();
employee.addObserver(notification.update);
employee.save();
