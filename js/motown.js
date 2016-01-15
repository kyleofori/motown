function updateTitle() {
  var title = document.getElementsByTagName('h1');
  title[0].innerHTML = "The Temptations";
}

function updatePicture() {
  var picture = document.getElementById('cookePic');
  picture.src = "images/temptations.jpg";
}

function update() {
  updateTitle();
  updatePicture();
}
var runningText = document.getElementById('running');

// Notice: can't have parentheses after the function names.
runningText.onclick = update;
// Equivalent to
// runningText.addEventListener('click', updateTitle, false);
