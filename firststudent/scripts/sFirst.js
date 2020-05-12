
//Write your code below....
var x = 70;
var y = 400;
var r1 = 70;
var r2 = 40;
var r3 = 20;

var increaseOrReduce = 'increase';

drawScreen = function() {
  if(increaseOrReduce == 'increase') {
    x = x+5;
  } else {
    x = x-5;
  }
  if(x>830) {
    increaseOrReduce = 'decrease';
  }

  var color = 'green';
  if(x < 400) {
    color = 'red';
  } else {
    color = 'green';
  }

  drawSurface(color);
  drawSnowman();
  //drawImage('./images/caillou.png', 120, 120, 200);
};

var drawSnowman = function() {
  circle(x, y, r1);
  var y2 = y-r1-r2;
  circle(x, y2, r2);
  var y3 = y2-r2-r3;
  circle(x, y3, r3);
};

var drawSurface = function(color) {
  rect(0, y+r1, 900, 100, color);
};
