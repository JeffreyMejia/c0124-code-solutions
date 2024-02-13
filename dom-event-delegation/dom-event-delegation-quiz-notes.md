# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The target property of the event object stores the element which dispatches the event.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  It is possible because of event bubbling. An event can occur in a child element and the element "bubbles" to the top and an event listener can trigger in the parent element.
- What DOM element property tells you what type of element it is?
  the `.tagName` property.
- What does the `element.closest()` method take as its argument and what does it return?
  It takes any valid css selector and returns the closest ancestor element or itself that matches the parameters.
- How can you remove an element from the DOM?
  The `.remove()` method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  Take advantage of event bubbling and add an event listener on the parent element.

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
