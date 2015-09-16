describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayer = new Player("X");
      expect(testPlayer.mark).to.equal("X");
   });
});

describe('Space', function() {
    it("returns coordinate x", function() {
      var testSpace = new Space(1,2, "empty");
      expect(testSpace.x_coord).to.equal(1);
   });
   
   it("returns coordinate y", function() {
      var testSpace = new Space(1,2, "empty");
      expect(testSpace.y_coord).to.equal(2);
   });
   
   it("returns who space is  marked by", function() {
      var testSpace = new Space(1,2, "empty");
      expect(testSpace.marked_by).to.equal("empty");
   });
   
   it("returns what is the mark in the space", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,2, testPlayer);
      expect(testSpace.marks_the_spot()).to.equal("X");
   });
   
   it("returns what is the mark in the space", function() {
      var testSpace = new Space(1,2, "empty");
      expect(testSpace.marks_the_spot()).to.equal("empty");
   });
});

describe('Board', function() {
    it("returns board with empty spaces", function() {
      var testSpace = new Space(1,1, "empty");
      var testSpace2 = new Space(1,2, "empty");
      var testSpace3 = new Space(1,3, "empty");
      var testSpace4 = new Space(2,1, "empty");
      var testSpace5 = new Space(2,2, "empty");
      var testSpace6 = new Space(2,3, "empty");
      var testSpace7 = new Space(3,1, "empty");
      var testSpace8 = new Space(3,2, "empty");
      var testSpace9 = new Space(3,3, "empty");
      var testSpaces =[testSpace, testSpace2, testSpace3, testSpace4, testSpace5, testSpace6, testSpace7, testSpace8, testSpace9];
      var testBoard = new Board();
      expect(testBoard.spaces).to.eql(testSpaces);
   });
   
   it("changes a Space on a board", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,1, testPlayer);
      var testBoard = new Board();
      testBoard.setSpace(testSpace);
      expect(testBoard.spaces[0]).to.eql(testSpace);
   });
   
   it("checks if space is empty", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,1, testPlayer);
      var testBoard = new Board();
      testBoard.setSpace(testSpace);
      expect(testBoard.isEmpty(testSpace.x_coord, testSpace.y_coord)).to.equal(false);
   });
   
   it("checks if there is a vertical win in first column", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,1, testPlayer);
      var testSpace2 = new Space(1,2, testPlayer);
      var testSpace3 = new Space(1,3, testPlayer);
      var testBoard = new Board();
      testBoard.setSpace(testSpace);
      testBoard.setSpace(testSpace2);
      testBoard.setSpace(testSpace3);
      expect(testBoard.checkIfVerticalWin()).to.equal(true);
   });
   
   it("checks if there is a vertical win in second column", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(2,1, testPlayer);
      var testSpace2 = new Space(2,2, testPlayer);
      var testSpace3 = new Space(2,3, testPlayer);
      var testBoard = new Board();
      testBoard.setSpace(testSpace);
      testBoard.setSpace(testSpace2);
      testBoard.setSpace(testSpace3);
      expect(testBoard.checkIfVerticalWin()).to.equal(true);
   });
   
   it("checks if there is a vertical win in third column", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(3,1, testPlayer);
      var testSpace2 = new Space(3,2, testPlayer);
      var testSpace3 = new Space(3,3, testPlayer);
      var testBoard = new Board();
      testBoard.setSpace(testSpace);
      testBoard.setSpace(testSpace2);
      testBoard.setSpace(testSpace3);
      expect(testBoard.checkIfVerticalWin()).to.equal(true);
   });
   
   it("checks if there is a Horizontal win in first row", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,1, testPlayer);
      var testSpace2 = new Space(2,1, testPlayer);
      var testSpace3 = new Space(3,1, testPlayer);
      var testBoard = new Board();
      testBoard.setSpace(testSpace);
      testBoard.setSpace(testSpace2);
      testBoard.setSpace(testSpace3);
      expect(testBoard.checkIfHorizontalWin()).to.equal(true);
   });
   
   it("checks if there is a Horizontal win in second row", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,2, testPlayer);
      var testSpace2 = new Space(2,2, testPlayer);
      var testSpace3 = new Space(3,2, testPlayer);
      var testBoard = new Board();
      testBoard.setSpace(testSpace);
      testBoard.setSpace(testSpace2);
      testBoard.setSpace(testSpace3);
      expect(testBoard.checkIfHorizontalWin()).to.equal(true);
   });
   
   it("checks if there is a Horizontal win in third row", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,3, testPlayer);
      var testSpace2 = new Space(2,3, testPlayer);
      var testSpace3 = new Space(3,3, testPlayer);
      var testBoard = new Board();
      testBoard.setSpace(testSpace);
      testBoard.setSpace(testSpace2);
      testBoard.setSpace(testSpace3);
      expect(testBoard.checkIfHorizontalWin()).to.equal(true);
   });
   
   it("checks if there is a Diagonal win left-right", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,1, testPlayer);
      var testSpace2 = new Space(2,2, testPlayer);
      var testSpace3 = new Space(3,3, testPlayer);
      var testBoard = new Board();
      testBoard.setSpace(testSpace);
      testBoard.setSpace(testSpace2);
      testBoard.setSpace(testSpace3);
      expect(testBoard.checkIfDiagonalWin()).to.equal(true);
      
   });
      
    it("checks if there is a Diagonal win right-left", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,3, testPlayer);
      var testSpace2 = new Space(2,2, testPlayer);
      var testSpace3 = new Space(3,1, testPlayer);
      var testBoard = new Board();
      testBoard.setSpace(testSpace);
      testBoard.setSpace(testSpace2);
      testBoard.setSpace(testSpace3);
      expect(testBoard.checkIfDiagonalWin()).to.equal(true);
   });   
   
   it("checks if last play won the game and returns the move that won", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,3, testPlayer);
      var testSpace2 = new Space(2,2, testPlayer);
      var testSpace3 = new Space(3,1, testPlayer);
      var testBoard = new Board();
      testBoard.setSpace(testSpace);
      testBoard.setSpace(testSpace2);
      testBoard.setSpace(testSpace3);
      expect(testBoard.checkIfThreeInARow()).to.equal(true);
   });  
   
   it("checks if the Board is full", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,3, testPlayer);
      var testSpace2 = new Space(2,2, testPlayer);
      var testSpace3 = new Space(3,1, testPlayer);
      var testBoard = new Board();
      testBoard.setSpace(testSpace);
      testBoard.setSpace(testSpace2);
      testBoard.setSpace(testSpace3);
      expect(testBoard.checkIfFull()).to.equal(false);
   }); 
});