'use strict';
const $character = document.querySelectorAll('span');
if (!$character) throw new Error('$character query has failed');
addEventListener('keydown', (e) => {
  for (let i = 0; i < $character.length; i++) {
    if (e.key === $character[i].textContent) {
      $character[i].className = 'correct';
    } else if (e.key !== $character[i].textContent) {
      $character[i].className = 'incorrect';
    }
  }
});
