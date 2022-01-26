const adaptations = [];

function Adaptation(title, description, director, actors, img, imdb) {
  (this.title = title),
    (this.description = description),
    (this.director = director),
    (this.actors = actors),
    (this.img = img),
    (this.imdb = imdb);
}

adaptations.push(
  new Adaptation(
    "Sherlock Holmes",
    "Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England",
    "Guy Ritchie",
    [
      {
        character: "sherlock",
        actor: "Robert Downey Jr",
        img: "assets/rdj.jpg",
      },
      { character: "watson", actor: "Jude Law", img: "assets/jl.jpg" },
      {
        character: "other",
        actor: "Rachel McAdams",
        img: "assets/Namnlöst-1.jpg",
      },
    ],
    "assets/3gNVdhlsW61xvkXwTCX31y_4jN0.jpg",
    "https://www.imdb.com/title/tt0988045/"
  )
);
adaptations.push(
  new Adaptation(
    "Sherlock",
    "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    ["Mark Gatiss", "Steven Moffat"],
    [
      {
        character: "sherlock",
        actor: "Benedict Cumberbatch",
        img: "assets/bc.jpg",
      },
      { character: "watson", actor: "Martin Freeman", img: "assets/mf.jpg" },
      {
        character: "other",
        actor: "Amanda Abbington",
        img: "assets/Namnlöst-1.jpg",
      },
    ],
    "assets/swQA2-nMmj6TjI7A4t66F3ddv6Q.jpg",
    "https://www.imdb.com/title/tt1475582/?ref_=nv_sr_srsg_0"
  )
);
adaptations.push(
  new Adaptation(
    "Enola Holmes",
    "When Enola Holmes-Sherlock's teen sister-discovers her mother missing, she sets off to find her, becoming a super-sleuth in her own right as she outwits her famous brother and unravels a dangerous conspiracy around a mysterious young Lord.",
    "Harry Bradbeer",
    [
      {
        character: "other",
        actor: "Millie Bobby Brown",
        img: "assets/Namnlöst-1.jpg",
      },
      {
        character: "sherlock",
        actor: "Henry Cavill",
        img: "assets/enola_sher.jpg",
      },
      {
        character: "other",
        actor: "Sam Claflin",
        img: "assets/Namnlöst-1.jpg",
      },
    ],
    "assets/enola-holmes-ht-jef-200921_1600696173876_hpMain_2_1x1_608.jpg",
    "https://www.imdb.com/title/tt7846844/?ref_=nv_sr_srsg_0"
  )
);
adaptations.push(
  new Adaptation(
    "Elementary",
    "A modern take on the cases of Sherlock Holmes, with the detective now living in New York City",
    "Robert Doherty",
    [
      {
        character: "sherlock",
        actor: "Jonny Lee Miller",
        img: "assets/jlm.jpg",
      },
      {
        character: "watson",
        actor: "Lucy Liu",
        img: "assets/ll.jpg",
      },
      {
        character: "other",
        actor: "Adian Quinn",
        img: "assets/Namnlöst-1.jpg",
      },
    ],
    "assets/Elementary-Saison-4-Sherlock-Holmes-Joan-Watson.jpg",
    "https://www.imdb.com/title/tt2191671/?ref_=nv_sr_srsg_0"
  )
);
