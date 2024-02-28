const $previous = document.querySelector('.previous-arrow');
if (!$previous) throw new Error('$previous query has failed');
const $next = document.querySelector('.next-arrow');
if (!$next) throw new Error('$next query has failed');
const $image = document.querySelectorAll('.pokemon');
if (!$image) throw new Error('$image query has failed');
const $progressDots = document.querySelectorAll('.dot');

let clickCounter = 0;

function carousel(): void {
  for (let i = 0; i < $image.length; i++) {
    if (i === clickCounter) {
      $image[i].setAttribute('class', 'pokemon hidden');
      $image[i + 1].setAttribute('class', 'pokemon');
      clickCounter++;
      dotToggle();
    }
  }
  if (clickCounter >= 5) {
    clickCounter = 0;
  }
}

$next.addEventListener('click', carousel);

function dotToggle(): void {
  for (let i = 0; i < $progressDots.length; i++) {
    if (i === clickCounter) {
      $progressDots[i].setAttribute('class', 'fa-solid fa-circle dot');
    } else {
      $progressDots.forEach((element) =>
        element.setAttribute('class', 'fa-regular fa-circle dot')
      );
    }
  }
}
