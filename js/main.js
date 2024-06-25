
function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento === null){
    console.log('Elemento não encontrado')
  }
  if (elemento != null){
    
    if (elemento.localName === 'audio'){
      elemento.play()
    }
    
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;  // templete de string
    tecla.onclick = function () {
      tocaSom(idAudio);
    };

    tecla.onkeydown =  function (evento) {

      if (evento.code === 'Enter' || evento.code === 'Space') {
        tecla.classList.add('ativa');
      }


    }
    
    tecla.onkeyup = function() {
      tecla.classList.remove('ativa')
    }
    

}



