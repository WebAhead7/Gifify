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
const cors = 'https://cors-proxy.htmldriven.com/?url=';

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

  fetch(
    'https://api.giphy.com/v1/gifs/search' +
      '?api_key=' +
      idKey +
      '&q=' +
      inputText
  )
    .then((data) => data.json())
    .then((json) => {
      const embed_url = json.data[1].images.original.url;
      const gif = document.getElementsByClassName('gif');
      gif[0].src = embed_url;

      var interval = setInterval(() => {
        var image = new Image();
        image.src = embed_url;
        var isComplete = image.complete;

        if (isComplete) {
          showSpinner(false);
          clearInterval(interval);
        } else {
          showSpinner(true);
        }
        console.log(isComplete);
      }, 100);
    });
}

/*
 * This function returns song id
 * @param songName is the song
 * that we typed in the search box
 * @return track id
 */
function fetchSongId(songName) {
  let trackId;
  fetch(
    'https://cors-anywhere.herokuapp.com/' +
      'https://api.musixmatch.com/ws/1.1/' +
      `track.search?apikey=8beb5ebee117dfca301f8444bcc7704c&q=${songName}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    // if we get a successfull response
    .then((data) => {
      trackId = data.message.body.track_list[0].track.track_id;
      console.log(trackId);
    })

    // catching errors
    .catch((err) => console.log(err));
  return trackId;
}

function fectchLyrics(trackId) {
  let lyrics;
  fetch(
    'https://cors-anywhere.herokuapp.com/' +
      'https://api.musixmatch.com/ws/1.1/' +
      `track.lyrics.get?apikey=8beb5ebee117dfca301f8444bcc7704c&track_id=${trackId}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(respose.status);
      }
      return response.json();
    })
    .then(() => (lyrics = data.message.body.lyrics.lyrics_body))
    .catch((err) => console.log(err));
  return lyrics;
}

function getLyrics(songName) {
  const songId = fetchSongId(songName);
  const lyrics = fectchLyrics(songId);
  return lyrics;
}
