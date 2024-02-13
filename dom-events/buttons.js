'use strict';
const $class = document.querySelector('.click-button');
if (!$class) {
  throw new Error('The $class query failed');
}
function handClick(event) {
  console.log('Button clicked');
  console.log(event);
  console.log(event.target);
}
$class.addEventListener('click', handClick);
const $hover = document.querySelector('.hover-button');
if (!$hover) {
  throw new Error('The $hover query failed');
}
function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$hover.addEventListener('mouseover', handleMouseOver);
const $dbl = document.querySelector('.double-click-button');
if (!$dbl) {
  throw new Error('The $dbl query failed');
}
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
$dbl.addEventListener('dblclick', handleDoubleClick);
