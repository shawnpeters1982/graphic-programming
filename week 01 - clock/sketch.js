var secLength = 160;
var secWidth = 1;
var minLength = 140;
var minWidth = 3;
var hourLength = 90;
var hourWidth = 5;

function setup() {
    createCanvas(900, 600);
    background(0);
}

function draw() {
    // Backgraound
    background(255);
    translate(width/2, height/2);

    // Clock Shape
    ellipse(0,0,350,350);

    // Seconds hand
    push();
    strokeWeight(secWidth);
    stroke(200,0,0)
    var secAngle = map(second(), 0, 60, 0, 360);
    rotate(radians(secAngle));
    line(0,0,0,-secLength);
    pop();

    // Long Hand
    push();
    strokeWeight(minWidth);
    var minAngle = map(minute(), 0, 60, 0, 360);
    rotate(radians(minAngle));
    line(0,0,0,-minLength);
    pop();

    // Short Hand
    push();
    strokeWeight(hourWidth);
    var hourAngle = map(hour(), 0, 12, 0, 360);
    rotate(radians(hourAngle));
    line(0,0,0,-hourLength);
    
        // Short hand pointing error left
        push();
        translate(0, -hourLength);
        rotate(radians(-45));
        line(0, 0, 0, 10);
        pop();

        // Short hand pointing error right
        push();
        translate(0, -hourLength);
        rotate(radians(45));
        line(0, 0, 0, 10);
        pop();

    pop();

    // Hours indicator
    var hours = 12;
    var hourStep = 360/12;
    for (var i=0; i<hours; i++){
       push();
       rotate(radians(hourStep * i));
       translate(0, -155);
       line(0, 0, 0, -20);
       pop();
    }
}
