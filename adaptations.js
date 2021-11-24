// the div in which to put the adaptations
const adaptationsDisplay = document.getElementById("adaptations-display");

function printAdaptations() {
  //loops through all adaptations
  adaptations.forEach((el, index) => {
    //assigns id to adaptation
    el.id = index;

    //create html that displays adaptaion
    const html = `<div id="sherlock-${
      el.id
    }" class="card px-0 mx-2 my-2 adaptation">
              <div class="img-container">
                <img
                  src=${el.img}
                  alt=""
                  class="card-img-top"
                />
                <a href="${el.imdb}" target="_blank">imdb</a>
                </div>
                
                <div class="card-body">
                  <h4 class="card-title">${el.title}</h4>
                  <p class="card-text">
                    ${el.description}
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <h5 class="starring-header">Starring</h5>
                    <p class="starring-actors">
                      ${el.actors.map((act) => act.actor).join(", ")}
                    </p>
                  </li>
                  <li class="list-group-item">
                    <h5 class="director-header">Director/Creator</h5>
                    <p class="director">${
                      typeof el.director === "string"
                        ? el.director
                        : el.director.join(", ")
                    }</p>
                  </li>
                </ul>
              </div>`;
    // insert adaptaion-element
    adaptationsDisplay.insertAdjacentHTML("beforeend", html);
  });
}

//call printing function
printAdaptations();
