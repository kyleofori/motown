var startTitle = "Campus Martius Park";
var startPicture = "images/campusmartius.jpg";
var startChoices = ["Where do you go?", "North.", "South."];
var startQuestion = "<p>" + startChoices[0] + "</p>";
var startChoice1 = "<input type=\"button\" class=\"choice one\" value=\"North.\" />"
var startChoice2 = "<input type=\"button\" class=\"choice two\" value=\"South.\" />"
var sd1 = "You wake up on a tiny beach surrounded by skyscrapers. Your head is pounding, and you have no idea what is going on. "
var sd2 = "\"Where am I?\" you mutter aloud. "
var sd3 = "\"Campus Martius Park,\" barks a deep male voice from behind you. \"And you can't stay here, either.\" "
var sd4 = "To the south, you see a lot of construction on the road; to the north, there's a funky looking wide building that seems to take up the whole block. "
var startDescription = "<p>" + sd1 + sd2 + sd3 + "<br />" + sd4;
var startArray = [startTitle, startPicture, startDescription, startChoices];
var river = "OK now you're at the river and whatever";
var compuware = "You are at the Compuware building. (How did you know that?) (It's not called that anymore.)";
var riverTitle = "Detroit River"
var compuwareTitle = "One Campus Martius"

function init() {
  var title = document.getElementsByTagName('h1');
  title[0].innerHTML = startTitle;
  var picture = document.getElementById('headerImage');
  picture.src = startPicture;
  var description = document.getElementById('description');
  description.innerHTML = startDescription;
  var choices = document.getElementById('choices');
  console.log("choices is " + choices);
  console.log("choices' first child is " + choices.firstChild);
  console.log("choices' innerHTML is " + choices.innerHTML);
  choices.innerHTML = startQuestion + startChoice1 + startChoice2;
  console.log("choices is " + choices);
  console.log("choices' first child is " + choices.firstChild);
  console.log("choices' innerHTML is " + choices.innerHTML);
}

init();

function update(event) {
  updateTitle(event);
  updatePicture(event);
  updateDescription(event);
  updateChoices(event);
}

function updateTitle(event) {
  var title = document.getElementsByTagName('h1');
  if(event.target.className == 'choice two') {
    title[0].innerHTML = riverTitle;
  } else {
    title[0].innerHTML = compuwareTitle;
  }
}

function updatePicture(event) {
  var picture = document.getElementById('headerImage');
  if(event.target.className == 'choice two') {
    picture.src = "images/hartriverview.jpg";
  } else {
    picture.src = "images/compuware.jpg";
    }
}

function updateDescription(event) {
  var description = document.getElementById('description');
  console.log(description);
  console.log("This is the event " + event.target.className);
  var newText = "default text";
  if(event.target.className == 'choice two') {
    newText = river;
  } else {
    newText = compuware;
  }
  console.log(newText);
  description.innerHTML = '<p>' + newText + '</p>';
}

function updateChoices(event) {
  var choice = ["Whatcha gonna do?", "One", "Two", "Three", "Four"];
  var question = document.getElementById('question');
  if(event.target.className == 'choice two') {
    question = choice[0];
  } else {
    newText = compuware;
  }
}


var choices = document.getElementsByClassName('choice');

choices[0].onclick = update; //traditional DOM event handler
choices[1].addEventListener('click', update, false); //event listener
//We don't have parentheses after the function name (update).
//I notice that when I include them, the button no longer works when I click.
//Book (JS&jQ, 255) claims that the code would run straight away; doesn't seem to happen.
