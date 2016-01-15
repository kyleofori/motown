function updateTitle() {
  var title = document.getElementsByTagName('h1');
  console.log(title);
  title[0].innerHTML = "The Temptations";
}

var runningText = document.getElementById('running');

// Notice: can't have parentheses after the function names.
runningText.onclick = updateTitle;
// Equivalent to
// runningText.addEventListener('click', updateTitle, false);
