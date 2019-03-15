var videoHTML; //declaration de la variable nommée videoHTML

function setup() {
  videoHTML = select('#maVideo');
}

function keyPressed(){
  if(key =='a'){
    videoHTML.play();
  }
}
