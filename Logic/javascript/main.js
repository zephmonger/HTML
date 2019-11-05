



function rain() {
	let rain=prompt("Is it raining? 1=yes/ 0=no");

	 if (rain==1) {
	 	alert('Take yo umbrella');
	}
	  else	{alert("Do not take your umbrella"); 
	}
}



function Rain2(){
	let inputRain = prompt('Is it raining? 1 for yes / 2 for no');

	if (inputRain == 1){
		alert('Take your umbrella');
	} else {
		alert ("do not take yo umbrellah!");
	}
}	

function ifrain(){
	let hamster=prompt("Is it raining? 1-yes / 2-no / 3-live in vancity");
	if (hamster==1 || hamster==3) {
		alert("Take your umbrella");
	} else {
			alert("You're lucky! No rain for yah!");}
}
function Rain3(){
	let Rain = parseInt(prompt('Is it raining? 1-Yes / 2-No / 3- I live in Vancouver / 4-if its swnowing'),
		10);
	switch(Rain)
	{
		case 1: alert('Take your umbrella');
		break;
		case 2: alert("Do not take your umrella");
		break;
		case 3: alert("Always take your umbrella");
		break;
		case 4: alert("Stay home & game out!");
		break;
		default: Rain3();
	}

}	

function fruit(){
	let fruit="cherry"
	let userInput= prompt('What is my favorite fruit?');
	if (userInput.toLowerCase() === fruit) {alert('Good guess!');
	} else {
		alert("Bad guess, amig!");}
}	

function addition(){
	let i = 0;
	do{
	console.log(i);
		i+=1
	}	while(i<10);
}//or let i;
	//for (i=0;i<11;i+=1){console.log(i)}

function guess(){
	
	

}




