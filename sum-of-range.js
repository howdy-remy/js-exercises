var range = function(start, end){
	var total = start;
	for(var i = start+1; i <= end; i++){
		total = total + i;
	}
	return total
};

var result = range(1,10);
debug("range result is " + result);



var sum = function(arr){
	var total = arr[0];
	for(var i = 1; i < arr.length; i++){
		total = total + arr[i];
	}
	return total
};

var result = sum([1,2,3,4,5,6,7,8,9,10]);
debug("sum result is " + result);



var stepRange = function(start, end, step){
	var arr = [start];
	if(step < 0){
		for(var i = start+step; i >= end; i = i+step){
			arr.push(i);
		};
	} else {
		for(var i = start+step; i <= end; i = i+step){
			arr.push(i);
		};
	}

	return arr;
};

var result = stepRange(5,2,-1);
debug("stepped range results " + result);