var penColour = 'black';

function setPixelColor(pixel) {
  pixel.style.backgroundColor = penColour;
}

function setPenColour(pen) {
 penColour = pen;
}

function clearCanvas() {
  location.reload();
}

function credits() {
  swal("Licences and credits",
"Developer: Zobos \n Icon pack by Freepik: www.flaticon.com/packs/general-ui ");
}
