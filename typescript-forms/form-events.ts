function handleFocus(event: Event): void {
  console.log('The focus event has fired');
  const eventTarget = event.target as HTMLElement | HTMLTextAreaElement | any;
  console.log('eventTarget.name:', eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('the blur event has fire');
  const eventTarget = event.target as HTMLElement | HTMLTextAreaElement | any;
  console.log('eventTarget.name:', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLElement | HTMLTextAreaElement | any;
  console.log('eventTarget.name:', eventTarget.name);
  console.log('value of name:', eventTarget.value);
}

const $userMessage = document.querySelector('#user-message');
const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');

if (!$userMessage || !$userName || !$userEmail) {
  throw new Error('$form, $userName, or $userEmail query failed');
}

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('keydown', handleInput);

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('keydown', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('keydown', handleInput);
