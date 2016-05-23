var compuware = {
  name: "compuware",
  title: "One Campus Martius (f.k.a. Compuware Building)",
  picture: "images/compuware.jpg",
  description: "You are at the Compuware building. (How did you know that?) (It's not called that anymore.)",
  question: "Who you gonna call?",
  choices: ["south-campusMartius"]
};

var river = {
  name: "river",
  title: "Detroit River",
  picture: "images/hartriverview.jpg",
  description: "OK now you're at the river and whatever",
  question: "What you gonna do?",
  choices: ["north-campusMartius"]
};

var campusMartius = {
  name: "campusMartius",
  title: "Campus Martius Park",
  picture: "images/campusmartius.jpg",
  description: "You wake up on a tiny beach surrounded by skyscrapers. Your head is pounding, and you have no idea what is going on. \"Where am I?\" you mutter aloud. \"Campus Martius Park,\" barks a deep voice from behind you. \"And you can't stay here, either.\" To the south, you see a lot of construction on the road; to the north, there's a funky looking wide building that seems to take up the whole block. ",
  question: "Where do you go?",
  choices: ["north-compuware", "south-river"]
};

initPage(campusMartius);

function initPage(place) {
  setTitle(place);
  setPicture(place);
  setDescription(place);
  setQuestion(place);
  setChoices(place);
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
  var dirButtons = document.getElementById('dirButtons');
  dirButtons.innerHTML = formatButtons(place.choices);
}

function formatText(text) {
  formattedText = "<p>" + text + "</p>";
  return formattedText;
}

function formatButtons(choices) {
  var toReturn = "";
  for(let i = 0; i < choices.length; i++) {
    var direction = choices[i].split("-");
    var directionText = direction[0];
    var directionPlace = direction[1];
    toReturn = toReturn.concat("<button onclick='initPage(" + directionPlace + ")'>"+directionText+"</button>");
  }
  return toReturn;
}
