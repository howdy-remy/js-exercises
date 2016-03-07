var countChars = function(str, char){
var numberOfChars = 0;
	for(var i = 0; i < str.length; i++){
		if(str.charAt(i) === char){
			numberOfChars++;
		}
	}
return numberOfChars;
};

var result = countChars("The quick brown fox jumped over the lazy dog","A");
debug(result);