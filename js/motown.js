var river = "OK now you're at the river and whatever";
var compuware = "You are at the Compuware building. (How did you know that?) (It's not called that anymore.)";
var riverTitle = "Detroit River"
var compuwareTitle = "One Campus Martius"

function update(e) {
  updateTitle(e);
  updatePicture(e);
  updateText(e);
  updateChoices(e);
}

function updateTitle(e) {
  var title = document.getElementsByTagName('h1');
  if(e.target.className == 'choice two') {
    title[0].innerHTML = riverTitle;
  } else {
    title[0].innerHTML = compuwareTitle;
  }
}

function updatePicture(e) {
  var picture = document.getElementById('headerImage');
  if(e.target.className == 'choice two') {
    picture.src = "images/hartriverview.jpg";
  } else {
    picture.src = "images/compuware.jpg";
    }
}

function updateText(e) {
  var description = document.getElementById('description');
  console.log(description);
  console.log("This is the event " + e.target.className);
  var newText = "default text";
  if(e.target.className == 'choice two') {
    newText = river;
  } else {
    newText = compuware;
  }
  console.log(newText);
  description.innerHTML = '<p>' + newText + '</p>';
}

function updateChoices(e) {
  var choice = ["Whatcha gonna do?", "One", "Two", "Three", "Four"];
  var question = document.getElementById('question');
  if(e.target.className == 'choice two') {
    question = choice[0];
  } else {
    newText = compuware;
  }
}


var choices = document.getElementsByClassName('choice');
// Notice: can't have parentheses after the function names.
console.log(choices);
choices[0].onclick = update;
choices[1].onclick = update;
// Equivalent to
// runningText.addEventListener('click', update, false);
