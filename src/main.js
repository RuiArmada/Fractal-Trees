import '../lib';

function setup() {
    createCanvas(400,400);
    angleMode(DEGREES);
    noLoop();
}

function draw() {
    background(220,220,220);
    translate(width/2,height);
    stroke(0,0,0);
    branch(width/4,20);
}

function branch(len,wei) {
    strokeWeight(wei);
    line(0,0,0,len);
    translate(0,-len);
    if(len > 4) {
        push();
            rotate(30);
            branch(0.7*len,0.7*wei);
        pop();
        
        push();
            rotate(-30);
            branch(0.7*len,0.7*wei);
        pop();
    } else {
        var rng = random(0,1);
        if(rng < 0.25) {
            fill(0,200,0);
            ellipse(0,0,14,6);
        } else {
            fill(100,3,0);
            ellipse(16,16,16,16);
        }
    }
}