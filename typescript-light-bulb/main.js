'use strict';
const $lightBulb = document.querySelector('div');
const $body = document.querySelector('body');
if (!$lightBulb || !$body) {
  throw new Error('$lightBulb or $body query has failed');
}
$lightBulb.addEventListener('click', () => {
  if ($lightBulb.className === 'light-bulb-off' && $body.className === 'off') {
    $lightBulb.className = 'light-bulb-on';
    $body.className = 'on ';
  } else {
    $lightBulb.className = 'light-bulb-off';
    $body.className = 'off';
  }
});
