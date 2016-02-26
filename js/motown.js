var startChoiceText = ["Where do you go?", "North.", "South."];
var startQuestion = formatQuestion(startChoiceText[0]);
var startChoice1 = formatChoice("one", startChoiceText[1]);
var startChoice2 = formatChoice("two", startChoiceText[2]);
var startChoiceHTML = [startQuestion, startChoice1, startChoice2];
var sd1 = "You wake up on a tiny beach surrounded by skyscrapers. Your head is pounding, and you have no idea what is going on. "
var sd2 = "\"Where am I?\" you mutter aloud. "
var sd3 = "\"Campus Martius Park,\" barks a deep voice from behind you. \"And you can't stay here, either.\" "
var sd4 = "To the south, you see a lot of construction on the road; to the north, there's a funky looking wide building that seems to take up the whole block. "
var startDescription = sd1 + sd2 + sd3 + sd4;
var startArray = ["", "", "", startChoiceHTML];

var campusMartius = {
  title: "Campus Martius Park",
  picture: "images/campusmartius.jpg",
  description: formatQuestion(startDescription),
  question: formatQuestion(startChoiceText[0]),
  choices: {
    directions: ["North.", "South."],
    places: [compuware, river]
  }
};

var compuware = {
  title: "One Campus Martius (f.k.a. Compuware Building)",
  picture: "images/compuware.jpg",
  description: formatQuestion("You are at the Compuware building. (How did you know that?) (It's not called that anymore.)"),
  question: formatQuestion(startChoiceText[0]),
  choices: {
    directions: ["North.", "South."],
    places: [compuware, campusMartius]
  }
};

var river = {
  title: "Detroit River",
  picture: "images/hartriverview.jpg",
  description: formatQuestion("OK now you're at the river and whatever"),
  question: formatQuestion(startChoiceText[0]),
  choices: {
    directions: ["North.", "South."],
    places: [campusMartius, river]
  }
};

function init() {
  var title = document.getElementsByTagName('h1');
  title[0].innerHTML = campusMartius.title;
  var picture = document.getElementById('headerImage');
  picture.src = campusMartius.picture;
  var description = document.getElementById('description');
  description.innerHTML = campusMartius.description;
  var choices = document.getElementById('choices');
  choices.innerHTML = campusMartius.question + startArray[3][1] + startArray[3][2];
  var choices = document.getElementsByClassName('choice');
  createChoices(choices);
}

function createChoices(choices) {
  for(i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', update, false);
    // choices[0].onclick = update; //traditional DOM event handler
    //We don't have parentheses after the function name (update).
    //I notice that when I include them, the button no longer works when I click.
    //Book (JS&jQ, 255) claims that the code would run straight away; doesn't seem to happen.
  }
}

function formatQuestion(question) {
  formattedQuestion = "<p>" + question + "</p>";
  return formattedQuestion;
}

function formatChoice(number, text) {
  formattedChoice = "<input type=\"button\" class=\"choice " + number + "\" value=\"" + text + "\" />";
  return formattedChoice;
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
    title[0].innerHTML = river.title;
  } else {
    title[0].innerHTML = compuware.title;
  }
}

function updatePicture(event) {
  var picture = document.getElementById('headerImage');
  if(event.target.className == 'choice two') {
    picture.src = river.picture;
  } else {
    picture.src = compuware.picture;
    }
}

function updateDescription(event) {
  var description = document.getElementById('description');
  console.log(description);
  console.log("This is the event " + event.target.className);
  var newText = "default text";
  if(event.target.className == 'choice two') {
    newText = river.description;
  } else {
    newText = compuware.description;
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
