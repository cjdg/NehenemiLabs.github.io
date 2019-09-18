function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(200);
}
