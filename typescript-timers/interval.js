'use strict';
function change(message) {
  const $countdown = document.querySelector('.countdown-display');
  if (!$countdown) throw new Error('$countdown query has failed');
  let number = $countdown.textContent;
  if (number === '4') {
    $countdown.textContent = '3';
  } else if (number === '3') {
    $countdown.textContent = '2';
  } else if (number === '2') {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  }
}
setInterval(change, 1000);
