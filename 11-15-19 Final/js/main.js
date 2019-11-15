function magic(){
	let x = document.getElementById("hw").value;
	let y = document.getElementById("hr").value;
	let	i;
	let k;
	let p = 40;
	if (x<= p && x>0) {
		i = (x*y);
		k = i - ((i*0.0495) + (i*0.017));
		document.getElementById("paystub").innerHTML = k;
	} else if (x>p && x>0) {
		i = (x*y) + ((x-p)*(y*1.2));
		k = i -((i*0.0495) + (i*0.017));
		document.getElementById("paystub").innerHTML = k;
	} 
}
function convert(){
	let x = document.getElementById("conman").value;
	let i = (x-32)*0.5556;
	if (i<=0) {
		document.getElementById("flip").innerHTML = i + " Brrrr! It's freezing! :'(";
	} else if (i>=30) {
		document.getElementById("flip").innerHTML = i + " Holy moly! It's too hot! :'(";
			} else {
				document.getElementById("flip").innerHTML = i + " Ahhhhh... Just the right Temperature! :D"
			}
}
function poop(){	
	if (document.getElementById('gues2').checked && document.getElementById('guess2').checked) {
		document.getElementById('pooping').innerHTML = "Way to go, amigo! You made it, 2 out of 2";
	} else if (document.getElementById('gues2').checked || document.getElementById('guess2').checked)
	document.getElementById('pooping').innerHTML = "You made it, 1 out of 2. You did good!";
	else{
		document.getElementById('pooping').innerHTML = "0 out 2! You should study more!";
	} 
}
