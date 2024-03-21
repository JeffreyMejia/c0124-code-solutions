# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to dynamically create a list of React components?
  When there is a multiple "components" or data that we want to display as a list.
- Why is it important for React components to be data-driven?
  To be able to work with them in array and objects so they can be displayed as lists.
- Where in the component code would a list of React components typically be built?
  within the ul element. The map method would create the actual list
- What `Array` method is commonly used to create a list of React components?
  The map method.
- Why do components in a list need to have unique keys?
  To uniquely identify the data in the list. This for cases where perhaps a component gets deleted then the perhaps the third component becomes the second and the second becomes the third. This helps to better keep track of the data.
- What is the best value to use as a "key" prop when rendering lists?
  A number to use as an id or identifier.

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
