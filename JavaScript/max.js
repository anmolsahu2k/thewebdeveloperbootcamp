function max(arr){
	var m=arr[0];
	for(var i=0;i<arr.length;i++){
		if(m<arr[i]){
			m=arr[i];
		}
	}
	console.log(m)
}