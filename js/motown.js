var startChoice1 = formatChoice("one", "NORTH");
var startChoice2 = formatChoice("two", "SOUTH");

function formatText(question) {
  formattedQuestion = "<p>" + question + "</p>";
  return formattedQuestion;
}

function formatChoice(number, text) {
  formattedChoice = "<input type=\"button\" class=\"choice " + number + "\" value=\"" + text + "\" />";
  return formattedChoice;
}

var campusMartius = {
  title: "Campus Martius Park",
  picture: "images/campusmartius.jpg",
  description: "You wake up on a tiny beach surrounded by skyscrapers. Your head is pounding, and you have no idea what is going on. \"Where am I?\" you mutter aloud. \"Campus Martius Park,\" barks a deep voice from behind you. \"And you can't stay here, either.\" To the south, you see a lot of construction on the road; to the north, there's a funky looking wide building that seems to take up the whole block. ",
  question: "Where do you go?",
  choices: {
    directions: ["North.", "South."],
    places: [compuware, river]
  }
};

var compuware = {
  title: "One Campus Martius (f.k.a. Compuware Building)",
  picture: "images/compuware.jpg",
  description: "You are at the Compuware building. (How did you know that?) (It's not called that anymore.)",
  question: "Who you gonna call?",
  choices: {
    directions: ["North.", "South."],
    places: [compuware, campusMartius]
  }
};

var river = {
  title: "Detroit River",
  picture: "images/hartriverview.jpg",
  description: "OK now you're at the river and whatever",
  question: "What you gonna do?",
  choices: {
    directions: ["North.", "South."],
    places: [campusMartius, river]
  }
};

function init() {
  setTitle(campusMartius);
  setPicture(campusMartius);
  setDescription(campusMartius);
  setQuestion(campusMartius);
  setChoices(campusMartius);
  var choices = document.getElementsByClassName('choice');
  createChoices(choices);
}

function setTitle(place) {
  var title = document.getElementsByTagName('h1');
  title[0].innerHTML = place.title;
}

function setPicture(place) {
  var picture = document.getElementById('headerImage');
  picture.src = place.picture;
}

function setDescription(place) {
  var description = document.getElementById('description');
  description.innerHTML = formatText(place.description);
}

function setQuestion(place) {
  var question = document.getElementById('question');
  question.innerHTML = formatText(place.question);
}

function setChoices(place) {
  var choices = document.getElementById('choices');
  choices.innerHTML = startChoice1 + startChoice2;
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
