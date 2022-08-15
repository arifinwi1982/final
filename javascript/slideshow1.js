//Global variables visible to all code in page.
//Subscript of first image to show.
var subscript = 0;
//Number of seconds for each picture to show.
var pictime = 2;
//List all of your image filenames. Filenames don't have to follow any pattern.
var images = new Array();
images[0] = 'images/profile_2.png';
images[1] = 'images/flex_box.png';
images[2] = 'images/golden_pulp_website.png';
images[3] = 'images/javascript_calculator.jpg';
images[4] = 'images/new_york.png';
images[5] = 'images/mountain_crossing.png';
//Fade out the current image, then pause.
function nextimg() {
  var imgtag = document.getElementById('slideimg');
  //Apply the fadeout style class.
  imgtag.className = 'fadeout';
  //wait 250ms, then get the new image.
  setTimeout('newimg()', 250);
}

//Calculate and show the next image.
function newimg() {
  //Calculate next image subscript number.
  subscript = subscript == images.length - 1 ? 0 : subscript + 1;
  //Set next image filename appropriate image name in array.
  var imagefile = images[subscript];
  //Set the image tag's src= and classname= attributes.
  var imgtag = document.getElementById('slideimg');
  imgtag.src = imagefile;
  imgtag.className = 'fadein';
}

//Make sure everything is loaded before starting timer.
window.onload = function () {
  var stimer = setInterval('nextimg()', pictime * 1000);
};
