var homeDiv = document.getElementById('home');
var aboutDiv = document.getElementById('about');
var contactDiv = document.getElementById('contact');
// intial display
homeDiv.style.display = 'block';
contactDiv.style.display = 'none';
aboutDiv.style.display = 'none';

// about us button function
function aboutFunction() {
  if (homeDiv.style.display === 'block') {
    homeDiv.style.display = 'none';
    contactDiv.style.display = 'none';
    aboutDiv.style.display = 'block';
  } else {
    homeDiv.style.display = 'none';
    contactDiv.style.display = 'none';
    aboutDiv.style.display = 'block';
  }
}
// contact us button function
function contactFunction() {
  if (homeDiv.style.display === 'block') {
    homeDiv.style.display = 'none';
    contactDiv.style.display = 'block';
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

const idKey = 'OiRmKWWUtNcSOtfRmlVDgYzuRKHSZPsz';

/*
 * if @param show is true spinner will show
 * We use this function when we make http
 * request and wait for it to load.
 */
function showSpinner(show) {
  const spinner = document.querySelector('.loader');
  spinner.style.display = show ? 'block' : 'none';
}

function submitbutton() {
  const inputText = document.getElementById('searchBox').value;

  fetch("https://api.giphy.com/v1/gifs/search"+"?api_key="+idKey+"&q="+inputText)
    .then((data) => data.json())
    .then(json => {
      
      const embed_url = json.data[1].images.original.url;
      const gif = document.getElementsByClassName("gif")
      gif[0].src = embed_url;
      
      var interval = setInterval(() => {
        
        var image = new Image()
        image.src = embed_url;
        var isComplete = image.complete;

        if (isComplete) {
          showSpinner(false);
          clearInterval(interval)

        } else {
          showSpinner(true);          
        }
        console.log(isComplete)
        
      }, 100);
    });

}

