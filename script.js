var penColour = 'white';
var tempColour = 'black';
var mouseDownvar = false;
//fillBG();
//penColour = 'black'

function load() {
  fillBG();
  penColour = 'black';
  console.log("Loaded.");
}

function setPixelColor(pixel) {
  pixel.style.backgroundColor = penColour;
}

function mouseDrag(pixel) {
  //console.log("Working");
  if (mouseDownvar == true) {
    setPixelColor(pixel);
  }
}

function mouseUp() {
  //console.log("Up");
  mouseDownvar = false;
}

function mouseDown() {
  //console.log("Down");
  mouseDownvar = true;
}

function setPenColour(pen) {
 penColour = pen;
}

function clearCanvas() {
  //location.reload();
  setPenColour('white');
  fillBG();
  setPenColour('black');
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
    pixel.draggable = false;

  });
  $('#art').attr('draggable', false);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
