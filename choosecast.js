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
  const characters = ["sherlock", "watson"];
  const viableAdaptations = findAdaptaions(characters);
  console.log(viableAdaptations);
  const formHTML = document.createElement("form");

  chooseCastDisplay.appendChild(formHTML);
  const formSelector = document.querySelector("form");

  for (const character of characters) {
    for (let i = 0; i < viableAdaptations.length; i++) {
      const html = `<h2 class="text-center mb-5">Who's your favourite ${
        character.slice(0, 1).toUpperCase() + character.slice(1)
      }?</h2>
                   <div class="row d-flex justify-content-around">

                       <div class="form-group col-md-3">
                           <img src="/assets/rdj.jpg" alt="">
                           <div class="d-flex justify-content-center">
                               <input type="radio" class="form-check-input" id="option-0" name="sherlock">
                               <label class="ps-3" for="option-1">Robert Downey Jr</label>
                           </div>
                       </div>
                       <div class="form-group col-md-3">
                           <img src="/assets/bc.jpg" alt="">
                           <div class="d-flex justify-content-center">
                               <input type="radio" class="form-check-input" id="option-1" name="sherlock"><label for="option-1" class="ps-3">Benedict Cumberbatch</label>
                           </div>
                       </div>
                       <div class="form-group col-md-3">
                           <img src="/assets/jlm.jpg" alt="">
                           <div class="d-flex justify-content-center">
                           <input type="radio" class="form-check-input" id="option-2" name="sherlock">
                           <label class="ps-3" for="option-2">Jonny Lee MIller</label></div>
                       </div>
                     </div>`;
      formSelector.insertAdjacentHTML("beforeend", html);
    }
  }
  const summaryBtn = document.createElement("button");
  summaryBtn.classList.add("btn", "btn-lg", "bg-info");
  summaryBtn.innerText = "Summary";
  formSelector.appendChild(summaryBtn);
}
printCast();
