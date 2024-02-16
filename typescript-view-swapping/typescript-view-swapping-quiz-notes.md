# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The target property of the event object stores the element which dispatches the event.
- What is the affect of setting an element to `display: none`?
  The element doesn't get displayed.
- What does the `element.matches()` method take as an argument and what does it return?
  any valid css selector is taken as an argument and a boolean value is returned.
- How can you retrieve the value of an element's attribute?
  the `.value` property of the the attribute property of the element object.
- At what steps of the solution would it be helpful to log things to the console?
  When declaring a new variable e.g.(like $dataView in main.ts). Another good time would be when checking conditional statements.
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  Each tab would need an event and view would need an event listener. This would make our code much longer.
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  There would need to be separate event listeners in order to add functionality.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
