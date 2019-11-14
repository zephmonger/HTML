//Function one
function myFunction(){
	var person = prompt("Please enter your name", "Harry Pooper");
	if (person != null) {
		document.getElementById("insert").innerHTML = "Hello " + person + "! How are you today?";
	}
}
//Function Two
//document.getElementsByTagName find all the tag names("..."). Whether you have one tag or 43, element(s) needs to be plural
function myfunction1(){
	let x = document.getElementsByTagName("ul")[0];
	x.getElementsByTagName("li")[0].innerHTML = "Pudding";
}
function myfunction2(){
	let x = document.getElementsByTagName("ul")[0];
	x.getElementsByTagName("li")[1].innerHTML = "Liquid Gold!";
}
//Function 3
function changecolor(){
	let x = document.getElementById("change");
	let y  = x.getElementsByClassName("child");
	let i;
	for (i = 0; i <y.length; i++){
		y[i].style.backgroundColor = "lightblue";
	}
}
//Function 4
function insert(){
	document.writeln("<h2>Welcome to Javascript Programming!</h2>");
}
//Function 5
function toUp(){
	let x = document.getElementById("fname");
	x.value = x.value.toUpperCase();
}
//Function 6
function onChange(){
	let a = document.getElementById("mySelect").value;
	document.getElementById("changed").innerHTML = "You selected: " + a;
}
//Function 7
function aboard(){
	alert('The image could not be loaded.');
}

//Function 8
function toYellow(x){
	x.style.background = "lightblue";
}

function keyDown()