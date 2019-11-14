function oi(){
	let name = prompt("Hello there, young buck. What might your mighty name be?");
	document.getElementById('demon').innerHTML = "Hello " + name + ". Nice work! Let’s start!";
}

function convert(){
	let far = parseInt(document.getElementById('faren').value);
	let sum = (far-32)*0.5556;

	document.getElementById("result").innerHTML = sum;
}
function check(){
	if (document.getElementById('guess3').checked) {
	document.getElementById('resulta').innerHTML = "Nice guess, big guy!";
	}	else {
		document.getElementById('resulta').innerHTML = "Poop Shooting, are we?";
	}

}
function checked(){
	if (document.getElementById('gues2').checked) {
	document.getElementById('resultb').innerHTML = "Way to go, tough guy!";
	}	else {
		document.getElementById('resultb').innerHTML = "Well, that's not the spirit, is it?";
	}

}

function age(){
	let aget = parseInt(document.getElementById('aged').value);
		i=0;
		
	    
	if (aget<i) {document.getElementById("ages").innerHTML = "You’re kidding, right?";

	} else if(aget==i){document.getElementById("ages").innerHTML = "Oh Baby, how can you work with computer that early in life!! :P";

	}else if(aget>=100) {document.getElementById("ages").innerHTML = "You are too old to play";

	} else {
		document.getElementById("ages").innerHTML = "Finally! Someone old enough!";
	}
}
function evens(){
	let x = parseInt(document.getElementById('oddity').value);
	i=0;

	if ((x%2)==0) {document.getElementById("event").innerHTML = " EVEN!"

	} else {document.getElementById("event").innerHTML = "ODD!"

	}
}