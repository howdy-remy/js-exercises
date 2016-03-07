var str = '';
for(var i = 1; i <= 7; i++){
	var temp = ('#').repeat(i).concat('\n');
	str = str.concat(temp);
}
debug(str)