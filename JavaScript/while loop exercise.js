var num=-10;
console.log("Print all numbers between -10 and 19");
while(num<=19){
	console.log(num);
	num++;
}
var num=10;
console.log("Print all even numbers between 10 and 40");
while(num<=40){
	if(num%2==0){
		console.log(num);
	}
	num++;
}
var num=300;
console.log("Print all odd numbers between 300 and 333");
while(num<=333){
	if(num%2!=0){
		console.log(num);
	}
	num++;
}
var num=5;
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while(num<=333){
	if(num%5==0 && num%3==0 &&num<=50){
		console.log(num);
	}
	num++;
}
