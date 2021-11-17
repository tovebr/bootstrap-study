const chooseCastDisplay = document.getElementById("choosecast");

function findAdaptaions(characters) {
  const sherAndWat = [];
  adaptations.forEach((adapt) => {
    let sum = 0;
    adapt.actors.forEach((actor) => {
      actor.character === characters[0] || actor.character === characters[1]
        ? (sum += 1)
        : (sum += 0);
    });
    sherAndWat.push(sum >= 2 ? 1 : 0);
  });

  const index = sherAndWat.map((el, index) => {
    if (el === 1) {
      return index;
    }
  });
  return index.filter((el) => el > -1 && true);
}

function printCast() {
  const formHTML = document.createElement("form");
  chooseCastDisplay.appendChild(formHTML);
  formHTML.classList.add("mw-50");
  const formSelector = document.querySelector("form");

  const characters = ["sherlock", "watson"];
  const viableAdaptations = findAdaptaions(characters);
  console.log(viableAdaptations);

  /*  for (const character of characters) { */
  for (let i = 0; i < viableAdaptations.length - 1; i++) {
    const actors = adaptations[viableAdaptations[i]].actors;

    const indexCharacter = actors.findIndex(
      (el) => el.character === characters[i]
    );

    const html = `<h2 class="text-center mt-5 mb-5">Who's your favourite ${
      characters[i].slice(0, 1).toUpperCase() + characters[i].slice(1)
    }?</h2>
                   <div class="row d-flex justify-content-around">

                       <div class="form-group col-md-3">
                           <img src="${
                             adaptations[viableAdaptations[0]].actors[
                               indexCharacter
                             ].img
                           }" alt="">
                           <div class="d-flex justify-content-center">
                               <input type="radio" class="form-check-input" id="option-0" name="sherlock">
                               <label class="ps-3" for="option-1">${
                                 adaptations[viableAdaptations[0]].actors[
                                   indexCharacter
                                 ].actor
                               }</label>
                           </div>
                       </div>
                       <div class="form-group col-md-3">
                           <img src="${
                             adaptations[viableAdaptations[1]].actors[
                               indexCharacter
                             ].img
                           }" alt="">
                           <div class="d-flex justify-content-center">
                               <input type="radio" class="form-check-input" id="option-1" name="sherlock"><label for="option-1" class="ps-3">${
                                 adaptations[viableAdaptations[1]].actors[
                                   indexCharacter
                                 ].actor
                               }</label>
                           </div>
                       </div>
                       <div class="form-group col-md-3">
                           <img src="${
                             adaptations[viableAdaptations[2]].actors[
                               indexCharacter
                             ].img
                           }" alt="">
                           <div class="d-flex justify-content-center">
                           <input type="radio" class="form-check-input" id="option-2" name="sherlock">
                           <label class="ps-3" for="option-2">${
                             adaptations[viableAdaptations[2]].actors[
                               indexCharacter
                             ].actor
                           }</label></div>
                       </div>
                     </div>`;
    formSelector.insertAdjacentHTML("beforeend", html);
    console.log(i);
  }
  const summaryBtn = document.createElement("button");
  summaryBtn.classList.add("btn", "btn-lg", "bg-info");
  summaryBtn.innerText = "Summary";
  formSelector.appendChild(summaryBtn);
}
printCast();
