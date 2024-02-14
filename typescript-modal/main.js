'use strict';
const $open = document.querySelector('.open-modal');
const $dismiss = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
if (!$open || !$dismiss || !$dialog) {
  throw new Error('The $open, $dismiss, or $dialog query failed');
}
$open.addEventListener('click', () => {
  $dialog.showModal();
});
$dismiss.addEventListener('click', () => {
  $dialog.close();
});
