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
    updateTasks();
};

var updateTasks = function(){
   
    //define the task list div
    var taskListHolding = document.getElementById("taskList");
    //empty the task list
    taskListHolding.innerHTML = "";
   
    //determine task list length
    var len = taskArray.length;

    //log each task
    for(i = 0; i < len; i++){
        //console.log('task ' + i + ': ' + taskArray[i]);
        //create a new div to hold this task
        var newTask = document.createElement('div');
        //define the new div's id as the index and class as task
        newTask.id = i;
        newTask.className = 'task';

        //create the task p to put in the note div
        var task = document.createElement('p');

        //assign the task to the task div
        task.innerText = taskArray[i];

        //append the task to the taskDiv
        newTask.appendChild(task);

        //create a delete button to put in the note div
        var deleteButton = document.createElement('button');

        //set the delete button id to 'deleteButton'
        deleteButton.id = 'deleteButton';

        //add X as a value;
        deleteButton.innerText = 'X';

        //add event listener for this delete button
        deleteButton.addEventListener('click', function(e){
            e.preventDefault();
            deleteTask(e);
        });

        //append the delete button to the taskDiv
        newTask.appendChild(deleteButton);
        //append the taskDiv to the task list holding div
        taskListHolding.appendChild(newTask);


    };

};

  var deleteTask = function(e){
        //console.log(e);
        var taskNumber = e.target.parentElement.id;
        console.log(taskNumber);
        //go to the "taskNumber" position of taskArray and remove one object.
        taskArray.splice(taskNumber, 1);//array.splice(position, howManyItemsYouWantToRemove)

        //update the task view to reflect the new list
        updateTasks();

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




