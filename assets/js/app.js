function playSound(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if(!audio) return; // stop the function from running all together
   audio.currentTime = 0; //rewind audio file to the start. This will let you hit a key over and over again it will play from the beginning, instead of having to wait for the audio file to end.
   audio.play();
   key.classList.add('playing');

   console.log(keyCode);
}


function removeTransition(e) {
   if(e.propertyName !== 'transform') return; // skip if not a transform css property
   this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound);
