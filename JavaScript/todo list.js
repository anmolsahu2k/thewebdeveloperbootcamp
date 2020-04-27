var arr=[];
var s=prompt("What would you like to do");
while(s!=="quit")
{
	if(s==="new"){
		var p=prompt("Enter a new todo");
		arr.push(p);
		console.log(p+" added to the list");
	}
	else if(s==="list"){
		console.log("**********");
		arr.forEach(function(hello,i,arr){
			console.log(i+": "+hello);
		});
		console.log("**********");
	}
	else if (s==="delete") {
		var d=prompt("Enter index of todo to delete");
		arr.splice(index,1);
		console.log("Todo is removed");
	}
	s=prompt("What would you like to do");
}
console.log("You quit the app");