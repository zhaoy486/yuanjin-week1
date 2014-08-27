//define an arrya to hold all the tasks
var taskArray = [];
var saveTask = function(){
	//define the task input form and value
	var taskInput = document.getElementById('newTask');
	var newTask = taskInput.value;

	//add the value to the task Array
	taskArray.push(newTask);

	//clear the input
	taskInput.value ="";

	//log the task array
    console.log(taskArray);
};

var init = function(){

    console.log("Hi! I'm Ready!");

    //define 'add' button
    var addButton = document.getElementById('addButton');

    //add event listenner for click, pass event, prevent event default and save task
    addButton.addEventListener('click',function(e){
    	e.preventDefault();
    	saveTask();
    });
    
};

window.onload = init();



