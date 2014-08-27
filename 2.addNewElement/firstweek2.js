var init = function(){

    console.log("Hi! I'm Ready!");
    //define "add" button
    var addButton = document.getElementById('addButton');
    var showNewElement = document.getElementById('demo');
    //add event listener for click, pass event, prevent event default and save task.
    addButton.addEventListener('click', function(e){
        e.preventDefault();
        console.log(e);
        var newE = document.createElement('DIV');
        newE.innerHTML = 'this is the new element!:-)'
        showNewElement.appendChild(newE);
	});
};

window.onload = init();



