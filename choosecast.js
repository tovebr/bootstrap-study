const chooseCastDisplay = document.getElementById("choosecast");

// what characters to add to the quiz
const characters = ["sherlock", "watson"];

//holds the actor-options sorted by character
const actorsOptions = [];

// keeps track of wheter or not a function is working based on previous actions
let quizTaken = false;

// create div element
const quizDiv = document.createElement("div");
quizDiv.classList.add(
  "quiz-container",
  "container-sm",
  "pt-2",
  "text-light",
  "mw-50"
);

// insert div
chooseCastDisplay.appendChild(quizDiv);

// select div-element
const quizDivContainer = document.querySelector(".quiz-container");

//create form
const formHTML = document.createElement("form");
formHTML.classList.add("my-2");

//insert form
quizDivContainer.appendChild(formHTML);

//select form
const formSelector = document.querySelector("form");

// function that creates button
function createButton(text) {
  // extract first word in button-description to make id
  const textFirstWord = text.split(" ");

  //make all letters low case
  const btnId =
    textFirstWord[0].slice(0, 1).toLowerCase() + textFirstWord[0].slice(1);

  //create button element
  const btn = document.createElement("button");
  btn.id = btnId;
  btn.classList.add("btn", "btn-summary", "d-block", "btn-lg", "bg-info");
  btn.innerText = text;

  return btn;
}

//function that prints cast
function printCast() {
  // loop through what characters shpuld be in the quiz
  for (let i = 0; i < characters.length; i++) {
    // create "holder-element" for current carachter
    let html = `<h2 class="text-center mt-5 mb-3">Who's your favourite ${
      characters[i].slice(0, 1).toUpperCase() + characters[i].slice(1)
    }?</h2><div class="row d-flex justify-content-around">`;

    //array to store actor-arrays in
    let characterActors = [];

    //loop through each adaptaions actor-array
    for (let j = 0; j < adaptations.length; j++) {
      //save each adaptaions actor-array
      const actors = adaptations[j].actors;

      // find current character in current adaptaion-actor-array
      const indexCharacter = actors.findIndex((el) => {
        // returns index of current actor if it exist, else undefined
        return el.character === characters[i]
          ? el.character === characters[i]
          : undefined;
      });

      // if character exist, push actor to actor-character-array
      characterActors.push(
        actors[indexCharacter] ? actors[indexCharacter] : undefined
      );

      if (actors[indexCharacter]) {
        //...and create html to display in browser
        html += `<div class="form-group col-md-3">
                  <img src="${actors[indexCharacter].img}" alt="">
                    <div class="d-flex justify-content-center">
                      <input type="radio" class="form-check-input" id="option-${i}${j}" name="${characters[i]}">
                      <label class="ps-3" for="option-${i}${j}">${actors[indexCharacter].actor}</label>
                    </div>
                  </div>`;
      }

      // when there are as many entries in character-actor-array as there are adaptaions
      if (characterActors.length === adaptations.length)
        //push to global array of actors sorted by character
        actorsOptions.push(characterActors);
    }

    // end html
    html += `</div>`;

    //insert all actors on current character
    formSelector.insertAdjacentHTML("beforeend", html);
  }

  formSelector.appendChild(createButton("Summary"));
}

printCast();

//function that checks result and displays it
function printResult(ids) {
  // adding html
  let html = `
  <h2 class="text-center">Your dream cast is...</h2><div class="row d-flex justify-content-around">`;

  // loop through the choosen actors and create html that displays current actor
  for (const [i, choosen] of ids.entries()) {
    html += `<div class="form-group col-md-3 text-center">
                <h3>${
                  characters[i].slice(0, 1).toUpperCase() +
                  characters[i].slice(1)
                }</h3>
                  <img src="${actorsOptions[i][choosen].img}" alt="">
                  <p>${actorsOptions[i][choosen].actor}</p>
              </div>`;
  }

  // end of html
  html += `</div>`;

  // create div that displays result
  const resultDiv = document.createElement("div");
  resultDiv.id = "result-container";
  resultDiv.classList.add(
    "result-container",
    "container-sm",
    "pt-5",
    "text-light",
    "mw-50"
  );

  // add html to div
  resultDiv.innerHTML = html;

  // create button and insert into div
  resultDiv.insertAdjacentElement("beforeend", createButton("Retake Quiz"));

  // place div in browser
  chooseCastDisplay.appendChild(resultDiv);

  // div-selector
  const quizResult = document.getElementById("result-container");

  // scroll to div
  quizResult.scrollIntoView();
}

// function that prints error-message
function printError() {
  const errorParagraph = document.createElement("p");
  errorParagraph.classList.add(
    "error-paragraph",
    "text-center",
    "fw-bold",
    "fs-3"
  );
  errorParagraph.innerText = "Choose one actor on each character";
  formSelector.appendChild(errorParagraph);
}

// button that makes summary of quiz
document.querySelector(".btn-summary").addEventListener("click", (e) => {
  e.preventDefault();

  //if quiz hasnt been taken already
  if (!quizTaken) {
    // selects all radio-buttons and converts to array
    const radioButtons = Array.from(
      document.querySelectorAll('input[type = "radio"]')
    );

    // stores ids of checked elements
    const checked = radioButtons
      .filter((el) => el.checked)
      .map((el) => Number(el.id.slice(-1)));

    // checks to see that an option has been selected for all characters
    if (checked.length === characters.length) {
      // if so, remove error-message if there was one
      document.querySelector(".error-paragraph") &&
        document
          .querySelector(".error-paragraph")
          .parentNode.removeChild(document.querySelector(".error-paragraph"));

      // call print results
      printResult(checked);

      // quiz has been taken
      quizTaken = true;
    } else {
      printError();
    }
  }
});

// if button to retake quiz was clicked
chooseCastDisplay.addEventListener("click", (e) => {
  // make sure thats the case
  if (e.target.id === "retake") {
    //scroll back up to quiz
    chooseCastDisplay.scrollIntoView();

    // result selector
    const resultDiv = document.getElementById("result-container");

    //remove result
    resultDiv.parentNode.removeChild(resultDiv);

    // quiz is "untaken"
    quizTaken = false;

    // select all radiobuttons and convert to array
    const radioButtons = Array.from(
      document.querySelectorAll("input[type = radio]")
    );
    // make radiobuttons unchecked
    radioButtons.forEach((el) => (el.checked = false));
  }
});
