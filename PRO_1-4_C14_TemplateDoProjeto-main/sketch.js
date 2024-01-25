var bow , arrow,  scene,bloon;
var bowImage, arrowImage, a,b,c,d, backgroundImage,verde_balloonImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  a= loadImage("red_balloon0.png");
  b = loadImage("green_balloon0.png");
  c = loadImage("pink_balloon0.png");
  d = loadImage("blue_balloon0.png");

  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //criando inimigos continuamente
  
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon ){
    case 1: //chamar o balão vermelho
    bloon = createSprite(0,0,400,400);
    bloon.addImage(a)
    break;
    case 2: // chamar o balão azul
    bloon = createSprite(0,0,400,400);
    bloon.addImage(b)
    break;
    case 3: // chamar o balão verde
    bloon = createSprite(0,0,400,400);
    bloon.addImage(c)
    break;
    case 4: // chamar o balão rosa
    bloon = createSprite(0,0,400,400);
    bloon.addImage(d)
    break;
    default:break;
  }}
    
  drawSprites();
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  //crieSprite para o balão
  //adicioneImagem para o balão
  // adicione velocidade para fazer o balão se mover
  // mudar a dimensão do balão
  // atriubua tempo de vida ao balão
}

function greenBalloon() {
  //crieSprite para o balão
  //adicioneImagem para o balão
  // adicione velocidade para fazer o balão se mover
  // mudar a dimensão do balão
  // atriubua tempo de vida ao balão
}

function pinkBalloon() {
 //crieSprite para o balão
  //adicioneImagem para o balão
  // adicione velocidade para fazer o balão se mover
  // mudar a dimensão do balão
  // atriubua tempo de vida ao balão
}
