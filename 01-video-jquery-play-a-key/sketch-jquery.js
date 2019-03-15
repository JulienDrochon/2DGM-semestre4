jQuery(document).ready(function($) {
  $('body').keypress(function(e){
    var touche = String.fromCharCode(e.which);
    console.log(touche);
    if(touche=="a"){
      $("#maVideo").get(0).play();
    }
  });
});
