//Toca o som associado ao elemento 'som_tecla_pom'.
function tocaSomPom() {
  document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

console.log(listaDeTeclas[0]);