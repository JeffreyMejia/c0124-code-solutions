'use strict';
const $h1 = document.querySelector('.message');
if (!$h1) throw new Error('$h1 query has failed');
setTimeout(() => {
  $h1.innerHTML = 'Hello There';
}, 2000);
