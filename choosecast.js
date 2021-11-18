const chooseCastDisplay = document.getElementById("choosecast");
// what characters to add to the quiz
const characters = ["sherlock", "watson"];

// find out which adaptations have all quiz-characters
const viableAdaptations = findAdaptaions(characters);

//holds the actor-options of the viable adaptations
const actorsOptions = [];

let quizTaken = false;

// create form element
const quizDiv = document.createElement("div");
quizDiv.classList.add(
  "quiz-container",
  "container-sm",
  "pt-5",
  "text-light",
  "mw-50"
);
chooseCastDisplay.appendChild(quizDiv);
const quizDivContainer = document.querySelector(".quiz-container");

const formHTML = document.createElement("form");
formHTML.classList.add("my-5");
quizDivContainer.appendChild(formHTML);
const formSelector = document.querySelector("form");

function createButton(text) {
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-summary", "d-block", "btn-lg", "bg-info");
  btn.innerText = text;
  return btn;
}

// finds adaptation that has all quiz-characters casted
function findAdaptaions(characters) {
  const hasQuizCharacters = [];

  adaptations.forEach((adapt) => {
    let sum = 0;
    adapt.actors.forEach((actor) => {
      actor.character === characters[0] || actor.character === characters[1]
        ? (sum += 1)
        : (sum += 0);
    });
    hasQuizCharacters.push(sum >= 2 ? 1 : 0);
  });

  const index = hasQuizCharacters.map((el, index) => {
    if (el === 1) {
      return index;
    }
  });
  return index.filter((el) => el > -1 && true);
}

function printCast() {
  for (let i = 0; i < characters.length; i++) {
    let html = `<h2 class="text-center mt-5 mb-5">Who's your favourite ${
      characters[i].slice(0, 1).toUpperCase() + characters[i].slice(1)
    }?</h2><div class="row d-flex justify-content-around">`;
    let characterActors = [];

    for (let j = 0; j < viableAdaptations.length; j++) {
      const actors = adaptations[viableAdaptations[j]].actors;

      const indexCharacter = actors.findIndex((el) => {
        return el.character === characters[i];
      });
      characterActors.push(actors[indexCharacter]);

      html += `<div class="form-group col-md-3">
              <img src="${actors[indexCharacter].img}" alt="">
                <div class="d-flex justify-content-center">
                  <input type="radio" class="form-check-input" id="option-${i}${j}" name="${characters[i]}">
                  <label class="ps-3" for="option-${i}${j}">${actors[indexCharacter].actor}</label>
                </div>
              </div>`;
    }
    html += `</div>`;

    if (characterActors.length === viableAdaptations.length)
      actorsOptions.push(characterActors);
    formSelector.insertAdjacentHTML("beforeend", html);
  }

  formSelector.appendChild(createButton("Summary"));
}

printCast();

function printResult(ids) {
  let html = `<div class="container-sm result-container pt-5 text-light mw-50">
  <h2 class="text-center mb-5">Your dream cast is...</h2><div class="row d-flex justify-content-around">`;
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
  html += `</div></div>`;
  chooseCastDisplay.insertAdjacentHTML("beforeend", html);
  chooseCastDisplay.appendChild(createButton("Retake Quiz"));
}

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

document.querySelector(".btn-summary").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".error-paragraph") &&
    document
      .querySelector(".error-paragraph")
      .parentNode.removeChild(document.querySelector(".error-paragraph"));
  const radioButtons = Array.from(
    document.querySelectorAll('input[type = "radio"]')
  );
  const checked = radioButtons
    .filter((el) => el.checked)
    .map((el) => Number(el.id.slice(-1)));
  console.log(checked);
  if (checked.length === characters.length) {
    printResult(checked);
  } else {
    printError();
  }
});
