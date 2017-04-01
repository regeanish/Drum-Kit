

function playSound(e){
const audio =  document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key =  document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio) return;// stop the function from running all together
audio.currentTime = 0; // rewind to the start
key.classList.add('playing');
}

function removeTransiton(e){
  if(e.propertyName !=='transform') return; //skip if its not a transform
  this.classList.remove('playing');

}
  window.addEventListener('keydown');
  // console.log(e.keyCode);


const keys=  document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transtionend', removeTransiton))
