yuanjin-week1
written by :
Alexandra Samuel
=============
 #CCLAB01 : Javascript


###Set up File Structure
- index.html
- script.js
- style.css

###Set up HTML + CSS

###Set up pseudo-code in script
- saveTasks ()
- deleteTasks ()
- loadTasks ()
- updateTaskList ()
- init()
- place to save tasks []


###Write init()

	var init = function(){

		console.log("Hi! I'm Ready!");
	};


###Add load listener

	window.onload = init();


- Load HTML File in browser and open console.
- Connect script to HTML and reload to see "Hi! I'm Ready!"

###Create Save Task()

	var saveTask = function(){

		//define the task input form and value
		var taskInput = document.getElementById('newTask');
		var newTask = taskInput.value;

		//add the value to the task Array
		taskArray.push(newTask);

		//clear the input
		taskInput.value = "";

		//log the task array
		console.log(taskArray);

	};

- Link to add button in init()
```
	//define "add" button
	var addButton = document.getElementById('addButton');

	//add event listener for click, pass event, prevent event default and save task.
	addButton.addEventListener('click', function(e){
		e.preventDefault();
		saveTask();
	});
```

- Test in browser: task array will log when you add a new task.

###Building Update Task ()

	var updateTasks = function(){

		//determine task list length
		var len = taskArray.length;

		//log each task
		for(i = 0; i < len; i++){
			console.log('task ' + i + ': ' + taskArray[i]);
		};

	};

- Test in browser: tasks will print when you manually call updateTasks();
- Clear the task list by adding the following before "var len"

```
//define the task list div
var taskListHolding = document.getElementsById('taskList');

//empty the task list
taskListHolding.innerHTML = "";

```

- Create the tasks -- in the four loop after console.log

```
//create a new div to hold this task
var newTask = document.createElement("div");

 //define the new div's class as id as the index and class as class
newTask.id = i;
newTask.className = "task";

//create the task p to put in the note div
var task = document.createElement("p");

//append the task to the taskDiv
newTask.appendChild(task);

//append the taskDiv to the task list hodling div
taskListHolding.appendChild(newTask);
```
- Test: Add items to list, run "UpdateTasks()" in console and check that it works by Inspecting Element and seeing the divs loaded into #TaskList

- Add content to each div by dropping the following code before appendChild(task)

		//assign the task to the task div
		task.innerText = taskArray[i];

- Call the task update whenever you Add() - place after taskInput Value = ''
```
	//update your task view
	updateTasks();
```

###What if we want to delete?
- Add the delete button to each task in for loop (after "task.innerText" and "newTask.append"
```
//create a delete button to put in the note div
var deleteButton = document.createElement('button');

  //set the delete button id to 'deleteButton'
deleteButton.id = "deleteButton";

  //add X as a value
deleteButton.innerText = "X";

  //append the delete button to the taskDiv
newTask.appendChild(deleteButton);
```

- TEST by reloading the browser and adding a task. You will see 'delete button' appear with each task.

- Create a delete function after update function
```
	var deleteTask = function(e){

		console.log('You want to delete me?');

	};
```
- Create a listener in update for loop after create delete button

		//add event listener for this delete button
		deleteButton.addEventListener('click', function(e){
			e.preventDefault();
			deleteTask(e);
		});


- TEST by reloading the browser, adding a task and clicking "delete". You will see "You want to delete me?" in the console.

- Change console.log("You want to delete me?"); to

```
console.log(e);
```
- Run again, but this time log event. When the large "window" object appears, open it up, find target > parentElement > id. This is the task number (we assigned the task number to the task div when we created it).

- Delete console.log(e) and replace it with the following
```
	var taskNumber = e.target.parentElement.id;
	console.log(taskNumber);
```

- Then, remove the task number from taskArray by using splice, then update the task list holding div.

```
	//go to the "taskNumber" position of taskArray and remove one object.
	taskArray.splice(taskNumber, 1);

	//update the task view to reflect the new list
	updateTasks();
```
###That's it!
