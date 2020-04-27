function isUniform(arr){
	var first=arr[0];
	arr.forEach(function(hello){
		if(hello!==first){
			return false;
		}
	});
	return true;
}