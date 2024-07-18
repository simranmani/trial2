


function setup() {
  createCanvas(600, 600);
  background(224, 200,45);
}

function draw() {
  fill(252, 159, 235)
  noStroke();
 rect(mouseX,mouseY,80,50);
  stroke(2);
  console.log("HOLA");
  line(width/2,height/2, mouseX,mouseY)
}
function mouseClicked() {
  background(224, 200,45);
}