var hx = 0
var hy = 50
var cx = 50
var cy = 150
var x = 70;
var y = 400;
var r1 = 70;
var r2 = 40;
var r3 = 20;
var imgY = 300;
var bgStart = 0;
var lives = 3;

var wts = false;
var restart2 = function () {
  timeoutSet = false;
};

var restart = function () {
  setTimeout(restart2,700);
  if(lives > 0) {
    ViewBackground.isMoving = true;
  }
}
var timeoutSet = false;
var whenbumps = function() {
  drawImage('./images/boom.png', 400,0,200);
  // if (ViewBackground.isMoving == true) {
  //     lives = lives-1;
  // }
  cx = 150
  cy = 200
  ViewBackground.isMoving = false;
  if (lives <= 0) {
  drawImage('./images/gameover.png',700,50,200);
} else if (!timeoutSet) {
  lives = lives-1;
  timeoutSet = true;
  setTimeout(restart,2000);
}
};
var score = 0
var duplicate = function() {
drawImage('./images/pokeball.png',rock,300)
}
var cPos = 0;
var moveForward = true;
var textList = ['First', 'Second', 'third', 'Fourth', 'Fifth'];
var imgYLoc = [0, 80, 160, 240, 320];
var imgXLoc = [0, 40, 120, 200, 280];
var textToShow = '';
var rock = 800;
var bringDown = function() {
  imgY=300;
};
drawScreen = function() {
  if(bgStart <= -900) {
    bgStart = -5;
  } else {
    bgStart -= 5;
  }
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
  //drawImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQys-MJLnN5f1KVUadGnqlzNQwRE0pnnGJiN_O1T9InVFJp1hEf&usqp=CAU',300,60,350);
  //drawImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9qXvPpr5v3EZCzhCMwNMn7YxIERDQdY-jFoyuAXji7LWeXrwF&usqp=CAU', x-40, imgY+70, 120);
  //drawImage('https://i.dlpng.com/static/png/6765783_preview.png'100,100,200)
  drawImage('https://cdn.clipart.email/222e4d947aa40eca2ef873ab0f1cc2ba_forest-clipart-background_612-339.jpeg', bgStart, 0, 900);
  drawImage('https://cdn.clipart.email/222e4d947aa40eca2ef873ab0f1cc2ba_forest-clipart-background_612-339.jpeg', bgStart+900, 0, 900);
  ViewBackground.draw();
  drawText('score'+ score,800,50,20);
  drawImage('./images/charizard0.png',cx,cy,350);
  //drawSurface(color);
  //drawSnowman();
  drawImage('./images/caillou.png', 400, imgY, 150);
  drawImage('./images/unnamed.png', rock,350,150);
  drawImage('./images/pokeball.png',rock+200,400,50);
  drawImage('./images/pokeball.png',rock-200,400,50);
  drawImage('./images/pokeball.png',rock+260,400,50);
  drawImage('./images/pokeball.png',rock-260,400,50);
  drawImage('./images/pokeball.png',rock+320,400,50);
  drawImage('./images/pokeball.png',rock-320,400,50);
  drawImage('./images/pokeball.png',rock-140,400,50);
  drawImage('./images/pokeball.png',rock-80,400,50);
  if (lives > 0) {
  drawImage('./images/cmon.png',hx,hy,100);
  }
  if (lives > 1) {
  drawImage('./images/cmon.png',hx+70,hy,100);
  }
  if (lives > 2) {
  drawImage('./images/cmon.png',hx+140,hy,100);
  }
  if(ViewBackground.isMoving){
    rock = rock-5;
    if(rock < 0) {
      rock= 800;
    }
  }

  if(imgY == 300){
    if(rock == 400){
    //if(rock < 450 && rock > 400){
      whenbumps();
    } else if (rock == 600 || rock == 200 || rock == 260 || rock == 540 || rock == 320 || rock == 480 || rock == 660 || rock == 720) {
      score = score+1
    }
  }


  //drawImage('./images/kid-cartoon.jpg', 120, 120, 200);
  //textToShow = textInHtml.value;
  drawText(textToShow, 200, 200, 30);
  if(textToShow == 'show') {
    placeholder.innerHTML = "<button>Good</button>";
  }
};

var imageJump = function() {
  if(imgY == 300) {
   imgY = 200;
  } else {
   imgY = 300;
  }
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

//imageJump();

var ViewBackground = {
  imageUrl : 'https://cdn.clipart.email/222e4d947aa40eca2ef873ab0f1cc2ba_forest-clipart-background_612-339.jpeg',
  startPos : 0,
  isMoving : true,
  draw : function() {
    drawImage('https://cdn.clipart.email/222e4d947aa40eca2ef873ab0f1cc2ba_forest-clipart-background_612-339.jpeg', this.startPos, 0, 900);
    drawImage('https://cdn.clipart.email/222e4d947aa40eca2ef873ab0f1cc2ba_forest-clipart-background_612-339.jpeg', this.startPos+900, 0, 900);
    if(this.isMoving) {
      this.startPos = this.startPos - 5;
      if(this.startPos <= -900) {
        this.startPos = 0;
      }
    }
  }
};
var header = document.getElementById("topHeader");
var textInHtml = document.getElementById("myText");
var placeholder = document.getElementById("dynamicData");

var canvas = document.getElementById("myCanvas");

canvas.addEventListener('click', function(event) {
  if(ViewBackground.isMoving) {
    ViewBackground.isMoving = false;
  } else {
    if(lives == 0) {
      lives = 3;
      score = 0;
    }
    ViewBackground.isMoving = true;
  }
}, false);

window.addEventListener('keydown', function(event) {
  if(event.keyCode == 32) {
    imgY = 150;
    setTimeout(bringDown, 800);

  //   imgY = 200;
  //   header.innerHTML = "<h1>Up</h1>";
  // } else if(event.keyCode == 40) {
  //   header.innerHTML = "<h1>Down</h1>";
  //   imgY = 300;
 }
}, false);
