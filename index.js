window.addEventListener('keydown',(e) => {

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // detener la función para que no se ejecute por completo
  audio.currentTime = 0; // rebobinar hasta el principio
  audio.play();

  // agregar la clase palying
  key.classList.add('playing');
})

function removeTransition(e) {

  if (e.propertyName !== 'transform') return; // saltar si no es una transformación
  this.classList.remove('playing') // this = key (const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);)

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));