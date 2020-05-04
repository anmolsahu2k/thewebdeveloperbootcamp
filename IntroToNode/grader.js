function average(arr){
	var s=0;
	for(var i=0;i<arr.length;i++){
		s+=arr[i];
	}
	return Math.round(s/arr.length);
}

var scores=[90,98,89,100,86,100,94];
console.log(average(scores));

var scores2=[40,65,77,82,80,54,73,63,95,49];
console.log(average(scores2));