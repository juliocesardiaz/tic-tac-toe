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
    console.log(this.spaces);
};

Board.prototype.find = function(x_coord, y_coord){
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

Board.prototype.isEmpty = function(x, y){
    var spaceToCheck = this.spaces[this.find(x, y)];
    if(spaceToCheck.marked_by == "empty"){
        return true;
    } else {
        return false;
    }
};

Board.prototype.setSpace = function(space){
  var x =  space.x_coord;
  var y = space.y_coord;
  var mark = space.marked_by; 
  var i = this.find(x, y);
  this.spaces[i] = space;
};

Board.prototype.checkIfThreeInARow = function() {
  // debugger;
    if(this.checkIfVerticalWin() || this.checkIfHorizontalWin() || this.checkIfDiagonalWin()){
        return true;
    } else {
        return false;
    }
};

Board.prototype.checkIfVerticalWin = function() {
  // debugger;
    var times = 0;
    for(var x = 1; x <=3; x++){
        for(var j = 2; j <= 3; j++){
            var tempSpace = this.spaces[this.find(x, j)];
            var tempSpace2 = this.spaces[this.find(x, (j - 1) )];
            if((tempSpace.marked_by.mark == tempSpace2.marked_by.mark) && (tempSpace.marked_by != "empty")) {
                times += 1;
            }
        }
        if(times < 2){
              times = 0;
            }
    }
    if(times == 2){
        return true;
    } else{
        return false;
    }
    
};

Board.prototype.checkIfHorizontalWin = function() {
  // debugger;
    var times = 0;
    for(var y = 1; y <=3; y++){
        for(var x = 2; x <= 3; x++){
            var tempSpace = this.spaces[this.find(x, y)];
            var tempSpace2 = this.spaces[this.find((x - 1), y)];
            if((tempSpace.marked_by.mark == tempSpace2.marked_by.mark) && (tempSpace.marked_by != "empty")) {
                times += 1;
            }
        }
        if(times < 2){
              times = 0;
            }
    }
    if(times == 2){
        return true;
    } else{
        return false;
    }
};

Board.prototype.checkIfDiagonalWin = function() {
    var middle = this.spaces[this.find(2, 2)];
    var leftTopCorner = this.spaces[this.find(1, 3)];
    var rightBottomCorner = this.spaces[this.find(3, 1)];
    var leftBottomCorner = this.spaces[this.find(1, 1)];
    var rightTopCorner = this.spaces[this.find(3, 3)];
    var leftRight = ((leftTopCorner.marked_by == middle.marked_by) && (rightBottomCorner.marked_by == middle.marked_by) && (middle.marked_by != "empty"));
    var rightLeft = ((leftBottomCorner.marked_by == middle.marked_by) && (rightTopCorner.marked_by == middle.marked_by) && (middle.marked_by != "empty"));
    
    if(leftRight || rightLeft) {
        return true;
    } else{
        return false;
    }
};

Board.prototype.checkIfFull = function(){
    // debugger;
    var isSpotFull = true;
    for(var x = 1; x <= 3; x++){
        for(var y = 1; y <= 3; y++){
            if(this.isEmpty(x, y) == true){
                isSpotFull = false;
                break;
            }
        }   
    }  
    return isSpotFull;
};

function Game(player1, player2, gameBoard, playerTurn){
    this.player1 = player1;
    this.player2 = player2;
    this.gameBoard = gameBoard;
    this.playerTurn = playerTurn;
};

Game.prototype.computerPlay = function(){
  var num = Math.floor((Math.random() * 9) + 1) - 1;
  var posSpace = this.gameBoard.spaces[num];
  if(this.gameBoard.isEmpty(posSpace.x_coord, posSpace.y_coord)){
    var tempSpace = new Space(posSpace.x_coord, posSpace.y_coord, this.player2);
    this.gameBoard.setSpace(tempSpace);
  } else {
    num = this.computerPlay();
  }
  return num;
};

$(document).ready(function() {
    var player1 = new Player("X");
    var player2 = new Player("O");
    var gameBoard = new Board();
    var daGame = new Game(player1, player2, gameBoard, player1);
    $("button").click(function() {
      // debugger;
      event.preventDefault();
      $(this).prop("disabled", true);
      $(this).text("")
      $(this).prepend("<i class='fa fa-times'></i>");
      
      var playerMove = parseInt($(this).attr('id'));
      var tempSpace = new Space(daGame.gameBoard.spaces[playerMove].x_coord, daGame.gameBoard.spaces[playerMove].y_coord, player1);
      daGame.gameBoard.setSpace(tempSpace);
      if((daGame.gameBoard.checkIfThreeInARow())){
        alert("You have Won!");
      } else if(daGame.gameBoard.checkIfFull()) {
        alert("Game Over no More Moves Left");
      } else{
          var play = daGame.computerPlay();
          $("#" + play).prop("disabled", true);
          $("#" + play).text("");
          $("#" + play).prepend("<i class='fa fa-circle-o'></i>");
          if((daGame.gameBoard.checkIfThreeInARow())){
            alert("You have LOST!");
          }
      }
    });
});