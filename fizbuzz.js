for(var i = 1; i <= 100; i++){
	if(i % 15 === 0){
		debug('FizzBuzz');
	} else if(i % 5 === 0){
		debug('Buzz');

	} else if(i % 3 === 0){
		debug('Fizz');
	} else {
		debug(i);
	}
}
