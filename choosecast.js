const chooseCastDisplay = document.getElementById("choosecast");
// what characters to add to the quiz
const characters = ["sherlock", "watson"];

//holds the actor-options sorted by character
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
  const textFirstWord = text.split(" ");
  const btnId =
    textFirstWord[0].slice(0, 1).toLowerCase() + textFirstWord[0].slice(1);
  const btn = document.createElement("button");
  btn.id = btnId;
  btn.classList.add("btn", "btn-summary", "d-block", "btn-lg", "bg-info");
  btn.innerText = text;
  return btn;
}

function printCast() {
  for (let i = 0; i < characters.length; i++) {
    let html = `<h2 class="text-center mt-5 mb-5">Who's your favourite ${
      characters[i].slice(0, 1).toUpperCase() + characters[i].slice(1)
    }?</h2><div class="row d-flex justify-content-around">`;
    let characterActors = [];

    for (let j = 0; j < adaptations.length; j++) {
      const actors = adaptations[j].actors;

      const indexCharacter = actors.findIndex((el) => {
        return el.character === characters[i]
          ? el.character === characters[i]
          : undefined;
      });
      characterActors.push(
        actors[indexCharacter] ? actors[indexCharacter] : undefined
      );

      if (actors[indexCharacter]) {
        html += `<div class="form-group col-md-3">
                  <img src="${actors[indexCharacter].img}" alt="">
                    <div class="d-flex justify-content-center">
                      <input type="radio" class="form-check-input" id="option-${i}${j}" name="${characters[i]}">
                      <label class="ps-3" for="option-${i}${j}">${actors[indexCharacter].actor}</label>
                    </div>
                  </div>`;
      }

      if (characterActors.length === adaptations.length)
        actorsOptions.push(characterActors);
    }
    html += `</div>`;
    formSelector.insertAdjacentHTML("beforeend", html);
  }

  formSelector.appendChild(createButton("Summary"));
}

printCast();

function printResult(ids) {
  const resultDiv = document.createElement("div");
  resultDiv.id = "result-container";
  resultDiv.classList.add(
    "result-container",
    "container-sm",
    "pt-5",
    "text-light",
    "mw-50"
  );
  let html = `
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

  html += `</div>`;

  resultDiv.innerHTML = html;
  resultDiv.insertAdjacentElement("beforeend", createButton("Retake Quiz"));
  chooseCastDisplay.appendChild(resultDiv);
  const quizResult = document.getElementById("result-container");
  quizResult.scrollIntoView();
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
  if (!quizTaken) {
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

    if (checked.length === characters.length) {
      printResult(checked);
      quizTaken = true;
    } else {
      printError();
    }
  }
});

chooseCastDisplay.addEventListener("click", (e) => {
  if (e.target.id === "retake") {
    chooseCastDisplay.scrollIntoView();
    const resultDiv = document.getElementById("result-container");
    resultDiv.parentNode.removeChild(resultDiv);
    quizTaken = false;
    const radioButtons = Array.from(
      document.querySelectorAll("input[type = radio]")
    );
    radioButtons.forEach((el) => (el.checked = false));
  }
});
