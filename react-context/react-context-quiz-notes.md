# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  to provide information from one component to the entire tree below it.
- What values can be stored in context?
  Any kind of value even objects
- How do you create context and make it available to the components?
  import `createcontext` from react, export const from a file so the components can use it. Then import the context and the `useContext` hook. Then wrap components in the providers.
- How do you access the context values?
  You use `useContext` and pass it the values.
- When would you use context? (in addition to the best answer: "rarely")
  When using an account a website to pass the login credentials, shopping cart information, any styling or theming, or when building your own routing.

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
