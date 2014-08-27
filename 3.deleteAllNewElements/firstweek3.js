var init = function(){

    console.log("Hi! I'm Ready!");
    //define "add" button
    var addButton = document.getElementById('addButton');
    var showNewElement = document.getElementById('demo');
    var deleteButton = document.getElementById('deleteButton');
    //add event listener for click, pass event, prevent event default and save task.
    addButton.addEventListener('click', function(e){
        e.preventDefault();
        var newE = document.createElement('DIV');
        newE.innerHTML = 'this is the new element!:-)'
        showNewElement.appendChild(newE);
	});

    //delete element
    deleteButton.addEventListener('click',function(b){
        e.preventDefault();
        showNewElement.removeChild(newE);
    });
};

window.onload = init();



