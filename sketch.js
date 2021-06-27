const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase;
var computerBase;
var player;
var computerPlayer;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   
  playerBase = new PlayerBase(300,random(450,height - 300),180,150)
  player = new Player(285,playerBase.body.position.y -153,50,180)

  computerBase = new ComputerBase(1200,random(450,height - 300),180,150)
  computerPlayer = new ComputerPlayer(1185,computerBase.body.position.y -153,50,180)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

      computerBase.Display()
      playerBase.Display()

      computerPlayer.Display()
      player.Display()

}
