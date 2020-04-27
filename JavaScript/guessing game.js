var secNum=4;
var guess=Number(prompt("guess a number"));
if(guess===secNum){
	alert("you got it right");
}
else if (guess>secNum) {
	alert("too high");
}
else{
	alert("too low");
}