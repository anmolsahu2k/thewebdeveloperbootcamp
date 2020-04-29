var one=document.querySelectorAll("button")[0];
var two=document.querySelectorAll("button")[1];
var reset=document.querySelectorAll("button")[2];
var span1=document.querySelectorAll("span")[0];
var span2=document.querySelectorAll("span")[1];
var c=0;
var d=0;
var gameover=false;
var winningscore=5;
var input=document.querySelector("input");
var span3=document.querySelector("p span");//p span(span inside p)


one.addEventListener("click",function(){
	if(!gameover){
	c++;
	span1.textContent=c;
	if(winningscore==c){
		span1.classList.add("winner");
		gameover=true;
	}
	}
});
two.addEventListener("click",function(){
	if(!gameover){
	d++;
	span2.textContent=d;
		if(winningscore==d){
		span2.classList.add("winner");
		gameover=true;
	}
	}
});
reset.addEventListener("click",function(){//click(to detect any click)
	resetter();
});
function resetter(){
	span1.textContent=0;
	span2.textContent=0;
	c=0;
	d=0;
	gameover=false;
	span2.classList.remove("winner");//.remove(to remove a class)
	span1.classList.remove("winner");
}
input.addEventListener("change",function () {//change(to detect any change)
	span3.textContent=this.value;//input.value(to get the inputted value)
	winningscore=this.value;
	resetter();
})

