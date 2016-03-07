var row = '';
var board = '';

var chessboard = function(squares){

	for(var i = 1; i <= squares; i++){
			if(i % 2 != 0){
				row = ('# ').repeat(squares/2).concat('\n');
			} else {
				row = (' #').repeat(squares/2).concat('\n');
			}
			board = board.concat(row);	
	}
};
chessboard(4)
debug(board);
