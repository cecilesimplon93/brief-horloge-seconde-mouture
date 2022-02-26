const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

let temps = new Date();
let heure = temps.getHours();
let minute = temps.getMinutes();
let seconde = (temps.getSeconds());

console.log("Initialisation à " + heure + ":" + minute + ":" + seconde);

seconde = (seconde * 6);
minute = (minute * 6);
heure = (heure * 30);

function demarrerLaMontre() {
  setInterval(
    function () {

      AIGUILLESEC.style = "transform:rotate(" + seconde + "deg)";
      AIGUILLEMIN.style = "transform:rotate(" + minute + "deg)";
      AIGUILLEHR.style = "transform:rotate(" + heure + "deg)";

      seconde = seconde + 6;
      minute = minute + (6/60 );
      heure = heure + (30/1440);

    }

    , 1000);
}

demarrerLaMontre();