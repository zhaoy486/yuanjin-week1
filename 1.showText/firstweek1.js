var init = function(){

    console.log("Hi! I'm Ready!");
 //    //define "add" button
    var addButton = document.getElementById('addButton');
    var showText = document.getElementById('demo');
 //    //add event listener for click, pass event, prevent event default
    addButton.addEventListener('click', function(e){
       e.preventDefault();
       showText.innerHTML="I am awesome";
	 });
};
window.onload = init();



