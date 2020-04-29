var li=document.querySelectorAll("li");
var input=document.querySelector("input");
for(var i=0;i<li.length;i++){
li[i].addEventListener("mouseover",function(){//callback function
	this.classList.toggle("green");
});
li[i].addEventListener("mouseout",function(){
	this.classList.toggle("green");
});
li[i].addEventListener("click",function(){
	this.classList.toggle("done");
	// this.innerHTML="";
});
}
// input.addEventListener("change",function(){
// 	li[li.length-1].innerHTML="<li>"+li[li.length-1].textContent+"</li><li>"+input.value+"</li>"
// });