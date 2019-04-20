var audio01;

function preload(){
  audio01 = loadSound("assets/drums01.mp3");
}
function setup(){
  noCanvas();
}
function draw(){
  if (('ondeviceorientation' in window)){

    window.addEventListener('deviceorientation', function(event) {
      document.getElementById('beta').innerHTML = Math.round(event.beta);
      document.getElementById('gamma').innerHTML = Math.round(event.gamma);
      document.getElementById('alpha').innerHTML = Math.round(event.alpha);

      // Face 1
      if(event.beta > -5 && event.beta < 5 && event.gamma > -5 && event.gamma < 5)
      // si mon téléphone est à plat sur la table,
      // - 5 < valeur beta < 5 et - 5 < valeur gamma < 5
      {
        // alors je joue un fichier son
        if(!audio01.isPlaying()){
          audio01.play();
        }
      }
    });
  }
}
