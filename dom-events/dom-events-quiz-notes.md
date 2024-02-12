# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To help with debugging and to test functions and code snippets.
- What is the purpose of events and event handling?
  To preform a certain function when something happens in the browser like hovering over a button or clicking it.
- Are all possible parameters required to use a JavaScript method or function?
  No some parameters are optional.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  .addeventlistener
- What is a callback function?
  A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
- What object is passed into an event listener callback when the event fires?
  a callback function.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The target property of the event object stores the element which dispatches the event. You find out more information if you weren't sure by logging it to the console.
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  In the first snippet the only the function definition is being passed through the .addEventListener. The second code snippet the callback function is being called which is incorrect.

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
