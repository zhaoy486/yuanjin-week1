var taskArray = [];
var saveTask = function(){
	var taskInput = document.getElementById("newTask");
	var newTask = taskInput.value;

	//add the value to the Array
	taskArray.push(newTask);
	console.log(taskArray);
	taskInput.value = "";
	updateTasks();
};
var updateTasks = function(){
	var taskListHolding = document.getElementById("taskList");
	//empty the task list
    taskListHolding.innerHTML ="";
    var len = taskArray.length;
    //log eachtask
    for(i=0; i<len;i++){
    	console.log("task" + i +":" + taskArray[i]);
    	var newTask = document.createElement("div");
    	newTask.id = i;
    	newTask.className = "task";
        var task = document.createElement("p");
    	task.innerText = taskArray[i];
    	newTask.appendChild(task);
    	taskListHolding.appendChild(newTask);
    };
};
var init = function(){
	console.log("hi I'm ready");
	var addButton =  document.getElementById("addButton");
    addButton.addEventListener("click", function(e){
    	e.preventDefault();
    	saveTask();
    });
};
window.onload = init();