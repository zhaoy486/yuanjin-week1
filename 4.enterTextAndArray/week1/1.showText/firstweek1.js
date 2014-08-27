var init = function(){
	console.log("Hi! I'm Ready!");
	var addButton = document.getElementById("addButton");
	var showNewElement = document.getElementById("demo");


	addButton.addEventListener("click", function(e){
		e.preventDefault();
		var newE = document.createElement("div");
		newE.innerHTML = "this is the new element!!;-)";
	    showNewElement.appendChild(newE);
	});
};
window.onload = init();