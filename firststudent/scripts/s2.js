
//Write your code below....
var x = 400;
//var txt = 'This is my new workspace';
drawText("This is old workspace", x-100, 100, 30);
drawText('I am going to write this', x,300, 20);
//drawText('hi my name is calliou  nice to meet you.' , 300, 150, 30);
circle(x, 300, 70);
ellipse(300, 300, 40, 60);
rect(200, 130, 200, 300);
//drawImage('./images/kid-cartoon.jpg', 20, 20, 100);
drawImage('https://shrewsburyma.gov/ImageRepository/Document?documentID=1519', 80, 80, 400);
drawImage('./images/caillou.png', 120, 120, 200);
drawImage('https://www.google.com/imgres?imgurl=https%3A%2F%2Ffreeaddon.com%2Fwallpaper%2Fcharizard%2Fthumb444x250-03.jpg&imgrefurl=https%3A%2F%2Ffreeaddon.com%2Fcharizard-wallpaper-pokemon-new-tab-themes%2F&tbnid=TzydgkedgtkW-M&vet=10CAgQMygDahcKEwjY4feg6aLpAhUAAAAAHQAAAAAQBA..i&docid=Nct6gBiVRkkQlM&w=444&h=250&q=pokemon%20charizard&ved=0CAgQMygDahcKEwjY4feg6aLpAhUAAAAAHQAAAAAQBA',120,120,100 );

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
