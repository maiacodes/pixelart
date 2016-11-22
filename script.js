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
"Developer: Zobos \n Icons by Icons8 (Not in use!) \n https://icons8.com/web-app/22263/Erase");
}
