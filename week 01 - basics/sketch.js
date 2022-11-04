function setup() {
    createCanvas(720, 400);
    rectMode(CENTER);
}

function draw() {
    background(220);

    // fill(0);
    // rect(200, 100, 100, 100);

    fill(125);
    translate(200, 200);    
    rotate(radians(45));
    // scale(.5, .5);
    rect(0, 0, 200, 200);

    push();
    fill(255, 0, 0);
    translate(100, 100);
    ellipse(0,0,20,20);
    pop();

    push();
    fill(255, 0, 0);
    translate(-100, -100);
    ellipse(0,0,20,20);
    pop();

}
