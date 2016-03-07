var minimum = function(a, b){
	if(a > b){
		return b;
	} else {
		return a;
	}
};

var result = minimum (101010111, 4);
debug(result);