function Player(mark){
    this.mark = mark;
};

function Space(x_coord, y_coord, marked_by){
    this.x_coord = x_coord;
    this.y_coord = y_coord;
    this.marked_by = marked_by;
};

Space.prototype.marks_the_spot = function(){
    var mark_in_space = this.marked_by;
    if((mark_in_space.mark == "X") || (mark_in_space.mark == "O") ){
        return mark_in_space.mark;
    }else {
        return mark_in_space;
    }
};

function Board(spaces){
    var spacesBoard = [];
    for(var  i = 1; i <= 3; i++){
        for(var j = 1; j<= 3; j++){
            var tempSpace = new Space(i, j, "empty");
            spacesBoard.push(tempSpace);
        }
    }
    this.spaces = spacesBoard;
};

Board.prototype.find = function(x_coord, y_coord){
    var i = 0;
    switch(x_coord) {
      case 1: 
        switch(y_coord){
            case 1:
                i = 0;
            case 2:
                i = 1;
            case 3:
                i = 2;
        }
      case 2:
        switch(y_coord){
            case 1:
                i = 3;
            case 2:
                i = 4;
            case 3:
                i = 5;
        }
      case 3:
        switch(y_coord){
            case 1:
                i = 6;
            case 2:
                i = 7;
            case 3:
                i = 8;
        }
    }
    return i;
};
Board.prototype.setSpace = function(space){
  var x =  space.x_coord;
  var y = space.ycoord;
  var mark = space.marks_the_spot; 
  var i = this.find(x, y);
  this.spaces[i] = space;
};

Board.prototype.checkIfThreeInARow = function(space) {
    
};

Board.prototype.checkIfVerticalWin = function(space) {
    debugger;
    var x_coord = space.x_coord;
    var y_coord = space.y_coord;
    var mark = space.marked_by;
    var times = 0;
    for(var j = 2; j <= 3; j++){
        var tempSpace = this.spaces[this.find(x_coord, j)];
        var tempSpace2 = this.spaces[this.find(x_coord, (j - 1) )];
        if((tempSpace == tempSpace2) && ((mark.marks_the_spot == "X") || (mark.marks_the_spot == "Y"))) {
            time += 1;
        }
    }
    if(times == 3){
        return true;
    } else{
        return false;
    }
    
};

Board.prototype.checkIfHorizontalWin = function(space) {
    
};

Board.prototype.checkIfDiagonalWin = function(space) {
    
};