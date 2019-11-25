var ball;
var court;

var ballX = 100;
var ballY = 200;
var ballSpeed = 12;



function preload() {
    ball = loadImage('ball.png')
    court = loadImage('court.jpg')
}

function setup() {
    createCanvas(600, 600)
}

function draw() {

    image(court, 0, 0, width, height)
    image(ball, ballX, ballY, 100, 100)
    
    if (mouseIsPressed) {
        
        ballY += ballSpeed;
        
        if (ballY > 470 || ballY < 200) {
            ballSpeed = ballSpeed * -1;
        }
    }
}