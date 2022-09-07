var bg , bgImg ;
var obs1 , obs1Img , obs2 , obs2Img , obs3 , obs3Img , obs4 , obs4Img , obs5 , obs5Img ;
var car , carImg ;
var obsCar1 , obsCar1Img , obsCar2 , obsCar2Img , obsCar3 , obsCar3Img ;
var obsGroup ;
var finishLine , finishLineImg ;

var obsArray = [ 
{ x:  790, y:  8000, image: obs2Img },
{ x: 150, y: height - 1300, image: obs1Img },
{ x:  250, y: height - 1800, image: obs3Img },
{ x:  180, y: height - 2300, image: obs2Img },
{ x: width / 2, y: height - 2800, image: obs2Img },
{ x: width / 2 - 180, y: height - 3300, image: obs4Img },
{ x: width / 2 + 180, y: height - 3300, image: obs2Img },
{ x: width / 2 + 250, y: height - 3800, image: obs2Img },
{ x: width / 2 - 150, y: height - 4300, image: obs5Img },
{ x: width / 2 + 250, y: height - 4800, image: obs4Img },
{ x: width / 2, y: height - 5300, image: obs1Img },
{ x: width / 2 - 180, y: height - 5500, image: obs3Img }

];




function preload(){
 bgImg = loadImage("assets/track.jpg");

 obs1Img = loadImage("assets/obs-bomb.png");
 obs2Img = loadImage("assets/obs-nail.png");
 obs3Img = loadImage("assets/obs-road1.png");
 obs4Img = loadImage("assets/obs-road2.jpg");
 obs5Img = loadImage("assets/obs-stone.png");

carImg = loadImage("assets/ourCar.png");

obsCar1Img = loadImage("assets/car1.png");
obsCar2Img = loadImage("assets/car2.png");

}

function setup() {

///////////////////////////////////////////////////////////////////////////////////////////////////

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    canW = diplayWidth;
    canH = displayHeight;
    createCanvas(diplayWidth + 80, displayHeight);
  }
  else {
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth, windowHeight);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////

  // creating background

  bg =  createSprite(800, 200, 50, 50);
  bg.addImage(bgImg); 

 // creating our own car
 
  car = createSprite(790 , 1370 , 20 , 20) ;
 car.addImage(carImg);
 car.scale = 0.5 ;
 
// creating obstacle cars

 obsCar1 = createSprite(500 , 1370 , 20 , 20) ;
obsCar1.addImage(obsCar1Img) ;
obsCar1.scale = 0.5 ;

 obsCar2 = createSprite(1050 , 1370 , 20 , 20) ;
obsCar2.addImage(obsCar2Img) ;
obsCar2.scale = 0.5 ;

// creating finidh line
finishLine = createSprite(4000 , 600 , 20 , 20);
finishLine.scale = 5;
console.log("finish line");


// creating groups

obsGroup = new Group();

}

function draw() {
  background(0);  

  if(keyDown(UP_ARROW)){
    car.y -= 5.7 ;

    obsCar1.velocityY = -5 ;
   
   // car.velocityX = 3 ;
    console.log("yes !!") ;

    obsCar2.velocityY = -5 ;

  }
  camera.position.y = car.position.y ; 
  //camera.position.y = obsCar1.position.y ;
 // camera.position.y = obsCar2.position.y ;

  // calling finctions

  spawnObs1(obsGroup ,13, obs1Img , 1 , obsArray) ; 


  const finshLine = height * 6 - 100; 
  if (car.positionY > finshLine)
   { gameState = 2;
     player.rank += 1;
     Player.updateCarsAtEnd(player.rank);
      player.update();
       this.showRank(); }
  

  drawSprites();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight); 
}


function spawnObs1 ( spriteGroup, numberOfSprites, spriteImage, scale, positions = [] ) {

    for (var i = 0; i < numberOfSprites; i++) {
      var x, y;

      //C41 //SA
      if (positions.length > 0) {
        x = positions[i].x;
        y = positions[i].y;
        spriteImage = positions[i].image;

}

var sprite = createSprite(x, y);
sprite.addImage("sprite", spriteImage);

sprite.scale = scale;
spriteGroup.add(sprite);

    }
}


/*

 function spawnObs1() {

  if(frameCount % 60 === 0 ){
  obstacle = createSprite ( random ( 600 , 950 ) , random ( 500 , -4000 )) ;
  var rand = Math.round(random(1,5));
  switch(rand) {
    case 1: obstacle.addImage(obs1Img);
            obstacle.scale = 0.5
            break;
    case 2: obstacle.addImage(obs2Img);
            obstacle.scale = 0.4
            break;
    case 3: obstacle.addImage(obs3Img);
            obstacle.scale = 0.9
            break;
    case 4: obstacle.addImage(obs4Img);
            obstacle.scale = 0.2 ;
            break;
    case 5: obstacle.addImage(obs5Img);
            obstacle.scale = 0.2 ;
            break;
    default: break;
  } 
  

  }

 }
 */