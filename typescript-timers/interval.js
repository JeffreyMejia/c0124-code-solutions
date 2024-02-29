'use strict';
let number = 4;
const $countdown = document.querySelector('.countdown-display');
function change() {
  if (!$countdown) throw new Error('$countdown query has failed');
  number--;
  if (number > 1) {
    $countdown.textContent = number.toString();
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}
const interval = setInterval(change, 1000);
