var isEven = function(number){
	if (number < 0){
		number = number*-1;
	} 

	if (number > 1){
		return isEven(number-2);
	} else if (number === 1){
		return false;
	} else {
		return true;
	}

};

var result = isEven(121);
debug(result);