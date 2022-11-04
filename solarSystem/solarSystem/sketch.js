var speed;

function setup() {
    createCanvas(900, 700);
}

function draw() {
    background(0);
    speed = frameCount;

    
    translate(width/2, height/2);
    push();
    // SUN
    rotate(radians(speed/3))
    celestialObj(color(255,150,0), 200);
    pop();
    
    // EARTH
    push();
    rotate(radians(speed));
    translate(0, 300);
    rotate(radians(speed));
    celestialObj(color(0, 0, 255), 80);


    // MOON
    rotate(radians(-speed*2));
    translate(0, 100);
    rotate(radians(-speed*2));
    celestialObj(color(220), 30);


    // MARS
    rotate(radians(speed*3));
    translate(0, 30);
    rotate(radians(speed*3));
    celestialObj(color(255,0,0), 15);
    pop();

}

function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}

