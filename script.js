/*
* COMP 125 Lab 9 - Object Oriented Programming (OOP)
*/

var myObj1, myObj2; // global variables to hold object instances

function setup() {
  createCanvas(500, 350);
  myObj1 = new MyClass(100, 100); // create first object at position (100, 100)
  myObj2 = new MyClass(300, 200); // create second object at position (300, 200)
}

function draw() {
  background(200);
  myObj1.move(); // move first object
  myObj1.display(); // display first object
  myObj2.move(); // move second object
  myObj2.display(); // display second object
}

function MyClass(tempX, tempY) {
  this.x = tempX;
  this.y = tempY;
  this.d = random(25, 100);
  this.xSpeed = random(-1.5, 1.5);
  this.ySpeed = random(-1.5, 1.5);
  this.color = color(random(255), random(255), random(255));

  this.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  };

  this.display = function () {
    push();
    translate(this.x, this.y);
    fill(this.color);
    ellipse(0, 0, this.d / 2, this.d);
    fill(255, 0, 0);
    rect(-10, -10, 20, 20);
    fill(0, 0, 255);
    triangle(-20, 0, 0, -20, 20, 0);
    pop();
  };
}
