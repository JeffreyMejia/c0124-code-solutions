const $h1 = document.querySelector('.message');
if (!$h1) throw new Error('$h1 query has failed');
setTimeout(() => {
  $h1.textContent = 'Hello There';
}, 2000);
