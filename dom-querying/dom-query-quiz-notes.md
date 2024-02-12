# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To help with debugging but also for labeling.
- What is a "model"?
  A model represents the structure for a document page.
- Which "document" is being referred to in the phrase Document Object Model?
  The HTML file or the main entry point to the page.
- What is the word "object" referring to in the phrase Document Object Model?
  the element tags like `<body>`
- What is a DOM Tree?
  Document Object Model which represents each document as a tree with objects ending in node and by modifying it we can change the appearance of a web page.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  `getelementbyid` and `queryselector`
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  `queryselectorall`
- Why might you want to assign the return value of a DOM query to a variable?
  The amount of computing time makes it takes becomes easier if the the reference is saved in a variable.
- What `console` method allows you to inspect the properties of a DOM element object?
  the `.dir()` method.
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  so that when querying occurs it doesn't get returned as a value.
- What does `document.querySelector()` take as its argument and what does it return?
  It takes selectors and returns the first element within a document that matches the selector.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  It takes selectors and returns a static Nodelist representing a list of the document's elements that match the specified group of selectos.

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
