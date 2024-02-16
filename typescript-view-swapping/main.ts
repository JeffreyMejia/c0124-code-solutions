const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

if (!$tabContainer || !$tab || !$view) {
  throw new Error('$tabContainer, $tab, or $view query has failed');
}
$tabContainer.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if ($tab[i] === $eventTarget) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }
  const $dataView = $eventTarget.getAttribute('data-view');
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $view.length; i++) {
      if ($view[i].getAttribute('data-view') === $dataView) {
        $view[i].className = 'view';
      } else {
        $view[i].className = 'hidden';
      }
    }
  }
});
