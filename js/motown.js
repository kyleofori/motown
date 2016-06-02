var userName = prompt("What is your name, traveler?", "Traveler");

var compuware = {
  name: "compuware",
  title: "One Campus Martius (f.k.a. Compuware Building)",
  picture: "images/compuware.jpg",
  description: "Escaping the security guard by simply walking away (like you know what you're doing), you have wandered into that wide building, which looks like an office building of the future. Looking up around the lobby, you see a beautiful and colorful mobile in the sky, with a waterfall nearby. You have been feeling thirsty...but you still don't know where you are!",
  question: "What is your next move?",
  choices: ["Leave the building-campusMartius", "Drink from the waterfall-hired"]
};

var hired = {
  name: "compuware",
  title: "You Are Hired By Dan Gilbert",
  picture: "images/gilbert.jpg",
  description: "As you tilt your head back to drink from the waterfall, that security guard comes back. \"What do you think you're doing?!\" Suddenly, a sharp pain shoots through your skull, and all goes black....But when you wake up, hours later, you see a familiar face grinning down at you. \"I like your sense of innovation, kid,\" Dan Gilbert says to you. \"How would you like to lead my new skyscraper waterfall drinking fountain project?\"",
  question: "THE END.",
};

var river = {
  name: "river",
  title: "Detroit River",
  picture: "images/hartriverview.jpg",
  description: "You are now at the river. While you are looking across the water, you hear a disembodied voice saying 'Hop in, " + userName + ". I can assure you safe passage south, to Windsor.' You look down, and notice a small brown boat sitting in the water, about five feet below you.",
  question: "What do you do?",
  choices: ["north-campusMartius", "south-boat"]
};

var campusMartius = {
  name: "campusMartius",
  title: "Campus Martius Park",
  picture: "images/campusmartius.jpg",
  description: "You wake up on a tiny beach surrounded by skyscrapers. Your head is pounding, and you have no idea what is going on. \"Where am I?\" you mutter aloud. \"Campus Martius Park,\" barks a deep voice from behind you. \"And you can't stay here, either.\" To the south, you see a lot of construction on the road; to the north, there's a funky looking wide building that seems to take up the whole block. ",
  question: "Where do you go?",
  choices: ["north-compuware", "south-river"]
};

var boat = {
  name: "boat",
  title: "On A Boat Crossing the River",
  picture: "images/boat.jpg",
  description: "\"This was a poor idea\", you think to yourself. Almost as soon as you hopped into the boat, you twisted your ankle. Furthermore, the boat seems to have started moving on its own, but you are now nearing the middle of the strait, and it is slowing down...",
  question: "What do you do?",
  choices: ["Shout for help-shark", "Stay in the boat-wateryEnd"]
};

var shark = {
  name: "shark",
  title: "You Meet Your End In A Shark's Maw",
  picture: "images/shark.jpeg",
  description: "You shout for help. No one hears you. You put your hand in the water, not realizing that you have cut your finger during this journey until the saltwater stings your knuckles. Guess who else realized you were bleeding? The only shark in the Detroit River. Things do not end well.",
  question: "THE END.",
  choices: undefined
}

var wateryEnd = {
  name: "wateryEnd",
  title: "You Meet Your End In A Boat",
  picture: "images/capsized_boat2.jpg",
  description: "Have you ever read \"The Life of Pi\", or seen the movie? Your story is a bit like that, except there's no tiger, and you never make it back home.",
  question: "THE END.",
  choices: undefined
}

startPage();
initPage(campusMartius);

function startPage() {
  if (userName !== null) {
    gameTitle = document.getElementsByClassName('gameTitle');
    gameTitle[0].innerHTML = userName + "'s " + gameTitle[0].innerHTML;
  }
}

function initPage(place) {
  setTitle(place);
  setPicture(place);
  setDescription(place);
  setQuestion(place);
  setChoices(place);
}

function setTitle(place) {
  var title = document.getElementById('levelTitle');
  title.innerHTML = place.title;
}

function setPicture(place) {
  var picture = document.getElementById('levelImage');
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

function formatTheButtons(div, choices) {
  div.innerHTML = "";
  if(choices !== undefined) {
    for (let i = 0; i < choices.length; i++) {
      let choiceButton = document.createElement("input");
      choiceButton.type = "button";
      var direction = choices[i].split("-");
      var directionText = direction[0];
      var directionPlace = direction[1];
      choiceButton.value = directionText;
      let directionPlaceObject = this[directionPlace];
      choiceButton.addEventListener("click", function() {
        initPage(directionPlaceObject);
      }, false);
      div.appendChild(choiceButton);
    }
  }
}

function setChoices(place) {
  var dirButtons = document.getElementById('dirButtons');
  formatTheButtons(dirButtons, place.choices);
}

function formatText(text) {
  formattedText = "<p>" + text + "</p>";
  return formattedText;
}
