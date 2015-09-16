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
    // debugger;
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
    // debugger;
    var i = 0;
    switch(x_coord) {
      case 1: 
        switch(y_coord){
            case 1:
                i = 0;
                break;
            case 2:
                i = 1;
                break;
            case 3:
                i = 2;
                break;
        }
        break;
      case 2:
        switch(y_coord){
            case 1:
                i = 3;
                break;
            case 2:
                i = 4;
                break;
            case 3:
                i = 5;
                break;
        }
        break;
      case 3:
        switch(y_coord){
            case 1:
                i = 6;
                break;
            case 2:
                i = 7;
                break;
            case 3:
                i = 8;
                break;
        }
        break;
    }
    return i;
};
Board.prototype.setSpace = function(space){
    // debugger;
  var x =  space.x_coord;
  var y = space.y_coord;
  var mark = space.marked_by; 
  var i = this.find(x, y);
  this.spaces[i] = space;
};

Board.prototype.checkIfThreeInARow = function(space) {
    
};

Board.prototype.checkIfVerticalWin = function() {
    // debugger;
    var times = 0;
    for(var x = 1; x <=3; x++){
        for(var j = 2; j <= 3; j++){
            var tempSpace = this.spaces[this.find(x, j)];
            var tempSpace2 = this.spaces[this.find(x, (j - 1) )];
            if((tempSpace.marked_by == tempSpace2.marked_by) && (tempSpace.marked_by != "empty")) {
                times += 1;
            }
        }
    }
    if(times == 2){
        return true;
    } else{
        return false;
    }
    
};

Board.prototype.checkIfHorizontalWin = function(space) {
    var times = 0;
    for(var y = 1; y <=3; y++){
        for(var x = 2; x <= 3; x++){
            var tempSpace = this.spaces[this.find(x, y)];
            var tempSpace2 = this.spaces[this.find((x - 1), y)];
            if((tempSpace.marked_by == tempSpace2.marked_by) && (tempSpace.marked_by != "empty")) {
                times += 1;
            }
        }
    }
    if(times == 2){
        return true;
    } else{
        return false;
    }
};

Board.prototype.checkIfDiagonalWin = function(space) {
    
};