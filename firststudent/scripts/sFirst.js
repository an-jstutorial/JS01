
//Write your code below....
var x = 70;
var y = 400;
var r1 = 70;
var r2 = 40;
var r3 = 20;

drawScreen = function() {
  if(x<830) {
    x = x+5;
  }

  var color = 'green';
  if(x < 400) {
    color = 'red';
  } else {
    color = 'green';
  }

  drawSurface(color);
  drawSnowman();
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
