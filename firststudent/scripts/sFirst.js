
//Write your code below....
var x = 70;
var y = 400;
var r1 = 70;
var r2 = 40;
var r3 = 20;
var imgY = 0;

var cPos = 0;
var moveForward = true;
var textList = ['First', 'Second', 'third', 'Fourth', 'Fifth'];
var imgYLoc = [0, 80, 160, 240, 320];
var imgXLoc = [0, 40, 120, 200, 280];

drawScreen = function() {
  if(moveForward) {
    x = x+5;
  } else {
    x = x-5;
  }
  if(x>=830) {
    moveForward = false;
  } else if(x < 70) {
    moveForward = true;
  }

  var color = 'green';
  if(x < 400) {
    color = 'red';
  } else {
    color = 'green';
  }

  for(var i=0; i<5; i++) {
    drawText(textList[i], (i+1)*80, (i+1)*80, 30);
  }

  // drawText('My Text 1', 200, 200, 30);
  // drawText('My Text 1', 300, 300, 30);
  // drawText('My Text 1', 400, 400, 30);
  // drawText('My Text 1', 500, 500, 30);

  drawSurface(color);
  //drawSnowman();
  drawImage('./images/caillou.png', imgXLoc[cPos], imgYLoc[cPos], 120);
  //drawImage('./images/kid-cartoon.jpg', 120, 120, 200);
};

var imageJump = function() {
  //if(imgY == 300) {
  //  imgY = 200;
  //} else {
  //  imgY = 300;
  //}
  cPos++;
  if(cPos==5) {
    cPos = 0;
  }
  setTimeout(imageJump, 300);
};

var drawSnowman = function() {
  circle(x, y, r1, 'blue');
  var y2 = y-r1-r2;
  circle(x, y2, r2);
  var y3 = y2-r2-r3;
  circle(x, y3, r3);
};

var drawSurface = function(color) {
  rect(0, y+r1, 900, 100, color);
};

imageJump();
