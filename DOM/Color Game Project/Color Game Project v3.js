var n=6;//defaukt 6 squares
var colors =[];
var pick;
var square=document.querySelectorAll(".square");
var rgb=document.querySelector("h1 span");
var msg=document.querySelector("#message");
var container=document.querySelector("#container");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");

init();

function init(){
resetter();
squareEvent();
modeButton();
}

function squareEvent(){
	for(var i=0;i<square.length;i++){
	square[i].addEventListener("click",function(){
	if(this.style.backgroundColor==pick){//use backgroundColor instead of background
		msg.textContent="Correct!!";
		h1.style.backgroundColor=pick;
		change(pick);
		reset.textContent="Play Again ??";
	}
	else{
		this.style.backgroundColor="#232323";
		msg.textContent="Try Again";
	}
});
}
}

function modeButton(){
	for(var i=0;i<mode.length;i++){
	mode[i].addEventListener("click",function(){
	mode[0].classList.remove("selected");
	mode[1].classList.remove("selected");
	mode[2].classList.remove("selected");
	this.classList.add("selected");
	if(this.textContent=="EASY")
		n=3;
	else if(this.textContent=="Medium")
		n=6;
	else
		n=9;
	resetter();
});
}
}

function resetter(){
	reset.textContent="NEW COLORS";
	msg.textContent="";
	h1.style.backgroundColor="steelblue";
	colors=gen(n);
	pick=pickColor();
	rgb.textContent=pick+" ";
for(var i=0;i<square.length;i++){
	if(colors[i]){
	square[i].style.backgroundColor=colors[i];
	square[i].style.display="block";//to display an element as usual
	}
	else
	square[i].style.display="none";//to hide an element
}
}	
reset.addEventListener("click",function(){
	n=6;
	resetter();
	mode[0].classList.remove("selected");
	mode[1].classList.add("selected");
	mode[2].classList.remove("selected");
});
	
// hard.addEventListener("click",function(){
// 	reset.textContent="NEW COLORS";
// 	//only 9 squares are there
// 	msg.textContent="";
// 	h1.style.backgroundColor="steelblue";
// 	colors=gen(9);
// 	pick=pickColor();
// 	rgb.textContent=pick+" ";
// for(var i=0;i<square.length;i++){
// 	square[i].style.backgroundColor=colors[i];
// 	square[i].style.display="block";
// }
// 	this.classList.add("selected");
// 	easy.classList.remove("selected");
// 	medium.classList.remove("selected");
// })
// medium.addEventListener("click",function(){
// 	reset.textContent="NEW COLORS";
// 	msg.textContent="";
// 	h1.style.backgroundColor="steelblue";
// 	colors=gen(6);
// 	pick=pickColor();
// 	rgb.textContent=pick+" ";
// for(var i=0;i<square.length;i++){
// 	if(i<6){
// 	square[i].style.backgroundColor=colors[i];
// 	square[i].style.display="block";
// 	}
// 	else
// 	square[i].style.display="none";
// }
// 	this.classList.add("selected");
// 	easy.classList.remove("selected");
// 	hard.classList.remove("selected");
// });
// easy.addEventListener("click",function () {
// 	reset.textContent="NEW COLORS";
// 	//only 3 squares are there
// 	msg.textContent="";
// 	h1.style.backgroundColor="steelblue";
// 	colors=gen(3);
// 	pick=pickColor();
// 	rgb.textContent=pick+" ";
// for(var i=0;i<square.length;i++){
// 	if(i<3){
// 	square[i].style.backgroundColor=colors[i];
// 	square[i].style.display="block";
// 	}
// 	else
// 	square[i].style.display="none";
//     this.classList.add("selected");
// 	hard.classList.remove("selected");
// 	medium.classList.remove("selected");
// }
// });


function change(color){
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=color;
	}
}

function pickColor(){
	return colors[Math.floor(Math.random()*colors.length)];//to get random integers from 0 to n(number of squares)
}

function gen(n){
	var arr=[];
	for(var i=0;i<n;i++){
		arr.push(randColor());
	}
	return arr;
}

function randColor(){
	var r,g,b;
	r=Math.floor(Math.random()*256);//to get a random integer between 0 and 255(inclusive)
	g=Math.floor(Math.random()*256);
	b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}