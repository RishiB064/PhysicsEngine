//nameSpace all the libraries
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//create the objects
var engine, world;
var ground;
var ball;

function setup()
{

    var canvas = createCanvas(400,400);

    //call the functions
    engine = Engine.create();
    world = engine.world;

    //create the options for chaanging the ground
    var ground_options ={
        isStatic: true
    }

    //create the ground
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    //add the ground to the world
    World.add(world,ground);

    console.log(ground);

    //create the options for the ball
    var ball_options=
    {
        restitution:1
    }
    
    //create the ball
    ball = Bodies.circle(200,100,20,ball_options);
    //add the ball to the world
    World.add(world,ball);
}

function draw()
{

    background(0);
    //update the engine
    Engine.update(engine);
    //align the rectangle to the center
    rectMode(CENTER);
    //give x and y positions to the rectangle
    rect(ground.position.x,ground.position.y,400,20);

    //draw the ellipse
    ellipseMode(RADIUS);
    //give the x and y positions to the ball
    ellipse(ball.position.x,ball.position.y,20,20);
}