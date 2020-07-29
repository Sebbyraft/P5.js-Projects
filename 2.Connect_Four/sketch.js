let board = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]];

let player = 1;
let winner = 0;

function setup() {
  createCanvas(7*100, 6*100);
}

function draw() {
  background(0,0,100);
  drawBoard();
  
  if(winner!=0){
    drawWinner();
  }
  
}

function chkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a ==b) && (a == c) && (a == d));
}

function chkWinner(bd) {
    // Check down
    for (r = 0; r < 3; r++)
        for (c = 0; c < 7; c++)
            if (chkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]))
                return bd[r][c];

    // Check right
    for (r = 0; r < 6; r++)
        for (c = 0; c < 4; c++)
            if (chkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3]))
                return bd[r][c];

    // Check down-right
    for (r = 0; r < 3; r++)
        for (c = 0; c < 4; c++)
            if (chkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3]))
                return bd[r][c];

    // Check down-left
    for (r = 3; r < 6; r++)
        for (c = 0; c < 4; c++)
            if (chkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3]))
                return bd[r][c];

    return 0;
}

function drawBoard(){
  for(let i=0; i < 6; i++){
    for(let j=0; j < 7; j++){
      if(board[i][j] === 0){
        fill(240);
      } else if (board[i][j] === 1){
        fill(230, 10, 10);
      } else if (board[i][j] === 2){
        fill(240, 180, 0);
      }
      stroke(0,0,0);
      strokeWeight(4);
      circle(50+j*100, 50+i*100, 100);
      
      if(i==5){
        textSize(32);
        fill(0);
        noStroke();
        text(j+1, 40+j*100, 60+i*100);
      }
    }
  }
}

function addToBoard(player, column){
  for(let i=0; i < 6; i++){
    if(board[5-i][column] == 0){
      board[5-i][column] = player;
      return;
    }
  }
}

function keyPressed(){
  if (key==1 || key==2 || key==3 || key==4 || key==5 || key==6 || key==7){
    if(player == 1){
      addToBoard(player, key-1);
      player = 2;
    } else {
      addToBoard(player, key-1);
      player = 1;
    }
  }
  
  if(player==1){
    console.log("Red moves");
  } else if(player==2){
    console.log("Yellow moves");
  }
  
  
  if (chkWinner(board)){
    winner = player;
  }
  if(winner==2){
    console.log("--------------------");
    console.log("Red wins");
    console.log("--------------------");
  } else if(winner==1){
    console.log("--------------------");
    console.log("Yellow wins");
    console.log("--------------------");
  }
}

function drawWinner(){
  
  
  textSize(96);
  
  if(winner==2){
    fill(230, 10, 10);
    text("RED WINS", 100, 300);
  } else if(winner==1){
    fill(240, 180, 0);
    text("YELLOW WINS", 10, 300);
  }
  
}

