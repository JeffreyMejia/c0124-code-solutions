# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  During a render.
- What is a React Effect?
  a way to declare a side effect that are caused by the rendering.
- When should you use an Effect and when should you not use an Effect?
  You should use it to synchronize your code with an external system. If your Effect only adjusts some state based on other state then you shouldn't use it.
- When do Effects run?
  after every render.
- What function is used to declare an Effect?
  First `useEffect` must be imported then it must be called at the top level of the component.
- What are Effect dependencies and how do you declare them?
  A way for React to skip re-running the Effect depending on what is inside the dependency array. You declare them with `[]`.
- Why would you want to clean up from an Effect?
  To prevent multiple Effect from piling up.
- How do you clean up from an Effect?
  returning a clean up function.
- When does the cleanup function run?
  It will run each time before the effect runs again and one final time when the component gets unmounted.

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
