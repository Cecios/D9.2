let destination = [
  {
    Prezzo: "1250$",
    Nazione: "Perù",
    Città: "Caral",
    ImgSrc: "./assets/perù.jpg",
    Descrizione:
      "Esplora le antiche civiltà del Perù, immergiti in paesaggi mozzafiato e lasciati affascinare dalla cultura ricca e vibrante che caratterizza questa destinazione straordinaria.",
  },
  {
    Prezzo: "1250$",
    Nazione: "Cina",
    Città: "Pechino",
    ImgSrc: "./assets/cina.jpg",
    Descrizione: "Pechino, la capitale cinese, ti accoglie con una storia millenaria e monumenti antichi che narrano storie affascinanti. Un viaggio attraverso il tempo e la cultura.",
  },
  {
    Prezzo: "1250$",
    Nazione: "Capo Verde",
    Città: "Praia",
    ImgSrc: "./assets/capoverde.jpg",
    Descrizione:
      "Scopri il fascino dell'arcipelago atlantico di Capo Verde, dove le spiagge dorate si fondono con la cultura vibrante, creando un'esperienza unica e indimenticabile."
  },
  {
    Prezzo: "1250$",
    Nazione: "Messico",
    Città: "Città del Messico",
    ImgSrc: "./assets/cittadelmessico.webp",
    Descrizione:
      "Città del Messico, la capitale messicana, ti accoglie con una cultura vibrante, cibi deliziosi e antiche rovine azteche che raccontano la storia affascinante di questo luogo unico.",
  },
  {
    Prezzo: "1250$",
    Nazione: "India",
    Città: "Agra",
    ImgSrc: "./assets/india.jpg",
    Descrizione:
      "L'India, ricca di cultura e storia, ti incanterà con magnifici monumenti come il Taj Mahal, offrendoti un'esperienza unica che combina tradizione, spiritualità e bellezza senza pari.",
  },
  {
    Prezzo: "1250$",
    Nazione: "Turchia",
    Città: "Istanbul",
    ImgSrc: "./assets/turchia.jpg",
    Descrizione: "Istanbul, una città unica che collega l'Europa e l'Asia, ti offre un viaggio attraverso secoli di storia, con meraviglie architettoniche e una vivace scena culturale.",
  },
  {
    Prezzo: "1400$",
    Nazione: "Bolivia",
    Città: "La Paz",
    ImgSrc: "./assets/bolivia.jpg",
    Descrizione:
      "La Paz, con la sua altitudine e paesaggi mozzafiato, ti regala un'esperienza indimenticabile. Esplora la cultura unica e goditi le viste spettacolari che solo la Bolivia può offrire.",
  },
  {
    Prezzo: "1550$",
    Nazione: "Madagascar",
    Città: "Antananarivo",
    ImgSrc: "./assets/madagascar.jpg",
    Descrizione: "Madagascar, un'isola unica nel suo genere, ti sorprenderà con una fauna e flora straordinarie. Esplora le sue bellezze naturali e scopri la diversità di questo affascinante angolo di mondo.",
  },
  {
    Prezzo: "1250$",
    Nazione: "Norvegia", 
    Città: "Oslo",
    ImgSrc: "./assets/oslo.webp",
    Descrizione: "La Norvegia ti accoglie con paesaggi spettacolari, fiordi incantevoli e l'incredibile spettacolo dell'aurora boreale. Un viaggio nella natura selvaggia e incontaminata del Nord Europa.",
  },
  {
    Prezzo: "1250$",
    Nazione: "Russia",
    Città: "Mosca",
    ImgSrc: "./assets/mosca.jpg",
    Descrizione: "Mosca, la capitale russa, ti offre la maestosità della Piazza Rossa e la storia affascinante del Cremlino. Esplora l'arte, la cultura e l'architettura di questa città unica.",
  },
  {
    Prezzo: "3070$",
    Nazione: "Australia",
    Città: "Sydney",
    ImgSrc: "./assets/australia.jpg",
    Descrizione: "Esplora l'Australia, un continente con la famosa Opera House di Sydney e spiagge mozzafiato. Scopri la diversità della fauna e flora australiana e vivi un'avventura unica.",
  },
  {
    Prezzo: "2800$",
    Nazione: "Giappone",
    Città: "Tokyo",
    ImgSrc: "./assets/giappone.jpg",
    Descrizione:
      "Il Giappone ti accoglie con Tokyo, una metropoli moderna che combina tradizione e tecnologia. Esplora i templi antichi, gustati la cucina deliziosa e immergiti nella cultura giapponese unica.",
  },
  {
    Prezzo: "2900$",
    Nazione: "Thailandia",
    Città: "Bangkok",
    ImgSrc: "./assets/thailandia.jpg",
    Descrizione:
      "Bangkok, la vivace capitale della Thailandia, è una città che incanta con la sua miscela unica di modernità e tradizione. Con grattacieli scintillanti e antichi templi buddisti, Bangkok offre un'esperienza contrastante e affascinante. Esplora i mercati galleggianti, assapora la cucina thailandese straordinaria, e immergiti nella frenetica vita notturna. Con il suo calore accogliente e il richiamo dei suoi luoghi iconici, Bangkok è un'irresistibile destinazione di avventura e scoperta.",
  },
];
let utenti = [
  {
    Nome: "Nicki Brooks",
    Valutazione: 4.5,
    Feedback: "Il viaggio è stato fantastico! Organizzazione impeccabile e luoghi meravigliosi. Grazie!",
    Immagine: "./assets/utente1.jpg"
  },
  {
    Nome: "Liam Johnson ",
    Valutazione: 5.0,
    Feedback: "Esperienza indimenticabile! Il personale è stato eccezionale e la destinazione era oltre le aspettative. Consiglio vivamente!",
    Immagine: "./assets/utente3.jpg"
  },
  {
    Nome: "Terry White",
    Valutazione: 3.8,
    Feedback: "Il viaggio è stato nel complesso buono, ma ci sono stati alcuni problemi con l'alloggio. Spero che possiate migliorare in futuro.",
    Immagine: "./assets/utente2.jpg"
  }
]
let c = 0
const sez_1 = document.querySelector("#sez-1 .row");
const sez_2 = document.querySelector("#sez-2 .row");
const sez_3 = document.querySelector("#sez-3 .row");
const sez_4 = document.querySelector("#sez-4 .row");
const sez_5 = document.querySelector("#sez-5 .row");
let addCard = function(){
    for (let i = 0; i < 4; i++) {

        c = Math.floor(Math.random()*(destination.length));

        sez_1.innerHTML += `<div class="col-6 col-md-4 col-lg-3 g-2 p-0 m-0">
        <div class="card h-100">
            <img src="${destination[c].ImgSrc}" class="card-img-top h-50" alt="Taj_mahal">
            <div class="card-body h-50 d-flex flex-column justify-content-between">
                <h5 class="card-title">${destination[c].Nazione}</h5>
                <p class="card-text">${destination[c].Descrizione}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
        </div>            
    </div>`;
    console.log(destination);
    destination.splice(c,1);
    }
    for (let j = 0; j < 6; j++) {
        c = Math.floor(Math.random()*(destination.length))
        
        sez_2.innerHTML += `<div class="col-6 col-md-4 col-lg-2 p-0 m-0">
        <div class="card h-100">
            <img src="${destination[c].ImgSrc}" class="card-img-top h-50" alt="Taj_mahal">
            <div class="card-body h-50 d-flex flex-column justify-content-between">
                <h5 class="card-title">${destination[c].Nazione}</h5>
                <p class="card-text">${destination[c].Descrizione}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
        </div>            
    </div>`;
    destination.splice(c,1);
    }
    c = Math.floor(Math.random()*(destination.length))

        sez_3.innerHTML += `<div class="col-7 p-0">
        <img src="${destination[c].ImgSrc}" class="w-100 h-100" alt="">
    </div>
    <div class="col-5 d-flex flex-wrap">
        <div class="w-100">
            <h2>${destination[c].Nazione}</h2>
            <h3>${destination[c].Città}</h3>
            <h5>Dal 27/11/2023 al 30/11/2023</h5>
            <br>
            <p>${destination[c].Descrizione}</p>
        </div>
        <div class="w-100 d-flex align-items-end">
            <h6><b>Prezzo</b><br>${destination[c].Prezzo}</h6>
        </div>
    </div>
</div>`;
    destination.splice(c,1);
    for (let k = 0; k < 2; k++) {
      c = Math.floor(Math.random()*(destination.length))
      sez_4.innerHTML += `<div class="col-5 p-0 m-0">
      <div class="card h-75">
          <img src="${destination[c].ImgSrc}" class="card-img-top h-50" alt="Taj_mahal">
          <div class="card-body h-50 d-flex flex-column justify-content-between">
              <h5 class="card-title">${destination[c].Nazione}</h5>
              <p class="card-text">${destination[c].Descrizione}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>            
  </div>`
  destination.splice(c,1);
    }
    for (let l = 0; l < utenti.length; l++) {
      sez_5.innerHTML += `<div class="col-12 w-100 d-flex">
      <div class="w-25 h-50">  
      <img src="${utenti[l].Immagine}" class="w-100 h-100" alt="utente" style="object-fit: contain;">
      </div>
      <div class="d-flex  w-75 h-50 flex-column">
         
              <h4 class="m-0">${utenti[l].Nome}</h4>
              
              <p class="m-0 p-1">${utenti[l].Feedback}</p>
              <div class="text-end"><b>Valutazione: ${utenti[l].Valutazione}</b></div>         
      </div>
      </div>
</div>`
      
    }

}
addCard();