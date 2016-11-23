var penColour = 'black';

function setPixelColor(pixel) {
  pixel.style.backgroundColor = penColour;
}

function setPenColour(pen) {
 penColour = pen;
}

function clearCanvas() {
  //location.reload();
  setPenColour('white');
  fillBG();
}

function credits() {
  swal("Licences and credits",
"Developer: Zobos \n Icon pack by Freepik: www.flaticon.com/packs/general-ui ");
}

function fillRandom() {
  $.each( $("[class*='pixel']"), function( key, pixel ) {
    setPenColour( getRandomColor() );
    setPixelColor(pixel);
  });
}

function fillBG() {
  $.each( $("[class*='pixel']"), function( key, pixel ) {
    setPixelColor(pixel);
  });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
