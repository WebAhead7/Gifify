var homeDiv = document.getElementById('home');
var aboutDiv = document.getElementById('about');
var contactDiv = document.getElementById('contact');
// intial display
homeDiv.style.display = 'block';
contactDiv.style.display = 'none';
aboutDiv.style.display = 'none';
// about us button function
function aboutFunction() {
  if (homeDiv.style.display === 'none') {
    homeDiv.style.display = 'block';
    contactDiv.style.display = 'none';
    aboutDiv.style.display = 'none';
  } else {
    homeDiv.style.display = 'none';
    contactDiv.style.display = 'none';
    aboutDiv.style.display = 'block';
  }
}
// contact us button function
function contactFunction() {
  if (homeDiv.style.display === 'none') {
    homeDiv.style.display = 'block';
    contactDiv.style.display = 'none';
    aboutDiv.style.display = 'none';
  } else {
    homeDiv.style.display = 'none';
    aboutDiv.style.display = 'none';
    contactDiv.style.display = 'block';
  }
}
// return button about to home
function aboutReturn() {
  if (aboutDiv.style.display === 'none') {
    aboutDiv.style.display = 'block';
    homeDiv.style.display = 'none';
    contactDiv.style.display = 'none';
  } else {
    aboutDiv.style.display = 'none';
    contactDiv.style.display = 'none';
    homeDiv.style.display = 'block';
  }
}
// return button contact to home
function contactReturn() {
  if (contactDiv.style.display === 'none') {
    aboutDiv.style.display = 'none';
    homeDiv.style.display = 'none';
    contactDiv.style.display = 'block';
  } else {
    aboutDiv.style.display = 'none';
    contactDiv.style.display = 'none';
    homeDiv.style.display = 'block';
  }
}
/////////////////////

/*
 * if @param show is true spinner will show
 * We use this function when we make http
 * request and wait for it to load.
 */
function showSpinner(show) {
  const spinner = document.querySelector('.loader');
  spinner.style.display = show ? 'block' : 'none';
}
