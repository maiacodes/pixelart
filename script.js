const GALLERY_TITLE = "Gallery!";
const GALLERY_HTML = "Gallery Error: 1";
const GALLERY_LINK = "http://www.thrusted.co.uk/pixelart/gallery.html"
const COLOR_LETTERS = '0123456789ABCDEF';

const $art = $('#art');
const $pixels = $('.pixel');

let penColour = 'white';
let tempColour = 'black';
let isMouseDown = false;

function load() {
  fillBG();
  penColour = 'black';
  console.log("Loaded.");
}

function setPixelColor() {
  this.style.backgroundColor = penColour;
}

function mouseDrag() {
  //console.log("Working");
  if (isMouseDown) {
    setPixelColor(this);
  }
}

function mouseUp() {
  //console.log("Up");
  isMouseDown = false;
}

function mouseDown() {
  //console.log("Down");
  isMouseDown = true;
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
  $pixels.each(function() {
    setPenColour(getRandomColor());
    setPixelColor.bind(this)();
  });
}

function fillBG() {
  $pixels.each(function() {
    setPixelColor.bind(this)();
    this.draggable = false;
  });
  $art.attr('draggable', false);
}

function getRandomColor() {
  let color = ['#'];
  for (let i = 0; i < 6; i++) {
    color.push(COLOR_LETTERS[(Math.random() * 16) | 0]); // | 0 rounds number to floor (faster)
  }
  return color.join(''); // join is faster than concatenation with "+"
}

function gallery() {
  GALLERY_TITLE = "[Gallery]"
  GALLERY_HTML =
    "<iframe src='" + GALLERY_LINK + "' width=900 height=400> </iframe>"

  swal({title: GALLERY_TITLE,text: GALLERY_HTML,html: true});
}

$art.on('mouseup', mouseUp);
$art.on('mousedown', mouseDown);

$pixels.on('click', setPixelColor);
$pixels.on('mouseover', mouseDrag);

$(load);
