a = document.getElementById("light1");
b = document.getElementById("light2");
c = document.getElementById("light3");
var mySound = document.getElementById('car-engine');

// this function applies only to the element that was JUST CLICKED so it does not use ID's
function logClick(){
	console.log("User clicked on a circle");
	//alert("User clicked on a circle");
}

// this function applies only to the element that was JUST CLICKED so it does not use ID's
function nextColor(elem){
	if (elem.classList.contains("green")){
		elem.classList.remove("green");
		elem.classList.add("yellow");
	}else if (elem.classList.contains("yellow")){
		elem.classList.remove("yellow");
		elem.classList.add("red");
	} else {
		elem.classList.remove("red");
		elem.classList.add("green");
	}
} 
// this function must check the state of OTHER ELEMENTS so we must refer to these elements using their ID
function checkColors(el){
	if (a.classList.contains("green") && b.classList.contains("green") && c.classList.contains("green")){
		mySound.play();
		console.log("All lights green!");
		
	} else if (a.classList.contains("red") && b.classList.contains("red") && c.classList.contains("red")){
		mySound.play();
		console.log("All lights green!");
		
	} else if (a.classList.contains("yellow") && b.classList.contains("yellow") && c.classList.contains("yellow")){
		mySound.play();
		console.log("All lights green!");
	}
	else{
		//i wish this function would work when all lights are yellow, or all are red...
	}
}