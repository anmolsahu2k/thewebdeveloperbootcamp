var colors =gen(6);
var square=document.querySelectorAll(".square");
// var pick= colors[3];
console.log("Conneted");
var pick= pickColor();
var rgb=document.querySelector("h1 span");
var msg=document.querySelector("#message");
var container=document.querySelector("#container");
var h1=document.querySelector("h1");
rgb.textContent=pick+" ";
for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];
	square[i].addEventListener("click",function(){
	if(this.style.backgroundColor==pick){
		msg.textContent="Correct!!";
		// container.style.backgroundColor=pick;
		h1.style.backgroundColor=pick;
		change(pick);
	}
	else{
		console.log(this.style.backgroundColor,pick);
		this.style.backgroundColor="#232323";
		msg.textContent="Try Again";
	}
});
}
function change(color){
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=color;
	}
}

function pickColor(){
	return colors[Math.floor(Math.random()*colors.length)];
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
	r=Math.floor(Math.random()*256);
	g=Math.floor(Math.random()*256);
	b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}