const textes = [
  `Étudiant en <a href="https://fr.wikipedia.org/wiki/Brevet_de_technicien_sup%C3%A9rieur_-_Services_informatiques_aux_organisations"
     target="_blank" class="text-decoration-none">BTS SIO</a> option
   <a href="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers"
     target="_blank" class="text-decoration-none">SLAM</a>`,
  "- En recherche d'une alternance -"
];

const delays = [8000, 2000];

let i = 0;

function switchText() {
  document.getElementById("description").innerHTML = textes[i];
  i = (i + 1) % textes.length;
  setTimeout(switchText, delays[i]);
}

switchText();
