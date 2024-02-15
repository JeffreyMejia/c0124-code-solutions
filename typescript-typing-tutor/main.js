'use strict';
const $character = document.querySelectorAll('span');
if (!$character) throw new Error('$character query has failed');
let index = 0;
addEventListener('keydown', (e) => {
  if (e.key === $character[index].textContent) {
    $character[index].className = 'correct';
    $character[index + 1].className = 'default';
    index++;
  } else {
    $character[index].className = 'incorrect';
  }
});
