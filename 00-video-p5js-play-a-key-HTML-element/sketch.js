var videoHTML; //declaration de la variable nommée videoHTML

function setup() {
videoHTML = select('#maVideo'); // on selectionne la video qui a l'id 'maVideo' dans le fichier index.html
}

function keyPressed(){ // si j'appuie sur une touche…
  if(key =='a'){ //… si la touche est 'a'
    videoHTML.play();
  }
}
