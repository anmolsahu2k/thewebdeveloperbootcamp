var colors = ["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(255, 0, 255)"];
var square=document.querySelectorAll(".square");
var pick= colors[3];
var rgb=document.querySelector("h1 span");
var msg=document.querySelector("#message");
var container=document.querySelector("#container");
rgb.textContent=pick+" ";
for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];
	square[i].addEventListener("click",function(){
	if(this.style.backgroundColor==pick){
		msg.textContent="Correct!!";
		// container.style.backgroundColor=pick;
		change(pick);
	}
	else{
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