const $tasklist = document.querySelector('.task-list');
if (!$tasklist) throw new Error('$tasklist query has failed');

$tasklist.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  console.log('event.target:', eventTarget);
  console.log('event.target.tagName:', eventTarget.tagName);
  const $button = document.querySelector('button');
  if (!$button) {
    throw new Error('$button query has failed');
  }
  if (eventTarget === $button) {
    const close = eventTarget.closest('.task-list-item');
    console.log(close);
    close?.remove();
  }
});
