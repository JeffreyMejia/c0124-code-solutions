const $previous = document.querySelector('.previous-arrow');
if (!$previous) throw new Error('$previous query has failed');
const $next = document.querySelector('.next-arrow');
if (!$next) throw new Error('$next query has failed');
const $image = document.querySelectorAll('.pokemon');
const $progressDots = document.querySelectorAll('.dot');

let clickCounter = 0;

function carouselRight(): any {
  if (clickCounter >= 4) {
    clickCounter = 0;
    $image[0].setAttribute('class', 'pokemon active');
    $image[4].setAttribute('class', 'pokemon hidden');
    return 0;
  }
  clickCounter++;
  for (let i = 0; i < $image.length; i++) {
    if (i === clickCounter) {
      $image[i].setAttribute('class', 'pokemon active');
      $image[i - 1].setAttribute('class', 'pokemon hidden');
      dotToggle();
    }
  }
  console.log('right:', clickCounter);
}

function carouselLeft(): any {
  if (clickCounter === 0) {
    clickCounter = 4;
    $image[4].setAttribute('class', 'pokemon active');
    $image[0].setAttribute('class', 'pokemon hidden');
    return 0;
  }
  clickCounter--;
  for (let i = 0; i < $image.length; i++) {
    const nextIndex = (i + 1) % $image.length;
    if (i === clickCounter) {
      $image[i].setAttribute('class', 'pokemon active');
      $image[nextIndex].setAttribute('class', 'pokemon hidden');
      dotToggle();
    }
  }
  console.log('left:', clickCounter);
}

$previous.addEventListener('click', carouselLeft);
$next.addEventListener('click', carouselRight);

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
