import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['The', 'yours', 'ours','theirs'];
let adjetive = ['awesone', 'large', 'fast', 'big', 'huge'];
let noun = ['freedom', 'river', 'city', 'table'];
let extensions = ['.com', '.net', '.us', '.ve'];

// Funcion que permite Generar dominios aleatorios

function generateRandomDomain() {
  let pronombre = pronoun[Math.floor(Math.random() * pronoun.length)];
  let adjetivo = adjetive[Math.floor(Math.random() * adjetive.length)];
  let sustantivo = noun[Math.floor(Math.random() * noun.length)];
  let extensiones = extensions[Math.floor(Math.random() * extensions.length)];

  return `${pronombre}${adjetivo}${sustantivo}${extensiones} `;

}

// Funcion que permite generar todos los dominios posibles

function generateAllDomains() {
  let domains = [];
  for (let pronombre of pronoun) {
    for (let adjetivo of adjetive) {
      for (let sustantivo of noun) {
        for (let extensiones of extensions) {
          domains.push(`${pronombre}${adjetivo}${sustantivo}${extensiones}`);
        }
      }
    }
  }

  return domains;
}

// Mostrar un dominio al cargar
let domainElement = document.getElementById('domain');
domainElement.textContent = generateRandomDomain();

// Escuchar clic en el botón
let btn = document.getElementById('domain_btn');
btn.addEventListener('click', () => {
  let newDomain = generateRandomDomain();
  domainElement.textContent = newDomain;

});
