var font;
var vehicles = [];
let result;
var canvas;
let ind;

function preload() {
  result = ["God is a gay",
  "La vie ne vaut rien, mais rien ne vaut la vie",
  "L'Homme propose Dieu dispose",
  "On ne connaît l'ami dans le besoin",
  "On va faire ça pas à pas",
  "Œil pour œil dent pour dent"];
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);


  textSize(120);

  ind = floor(random(result.length-1));
  var points = font.textToPoints(result[0],(windowWidth-textWidth(result[0]))/2, 500, 120);

  console.log(  textWidth(result[0]) );
  // console.log( points );

  for(i in points){
    var pt=points[i]
    var vehicle=new Vehicle(pt.x,pt.y) // ----
    vehicles.push(vehicle)
  }
}

function draw(){
  background(244, 196, 196);

  for(i in vehicles){
    var v = vehicles[i]
    v.behaviours();
    v.update()
    v.show()
  }
  strokeWeight(3);
  stroke(0);

  // var metrics = canvas.measureText(result[ind]);
  //
  // line(200,510,200+metrics.width, 510);
}

// https://stackoverflow.com/questions/2608022/how-can-i-use-custom-fonts-in-an-html5-canvas-element
