# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  A type of function that allows a code base to make use of external functionality such as a log in system, or a data store. Hooks are used to add state functionality into individual components so that the state can be used to persist data between component calls and schedule component re-renders.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  The function name must start with use followed by an uppercase letter, hooks can only be called by React components and other hooks, and all hooks in a component must always be called at the top level of a component, an in the same order.
- What is the purpose of state in React?
  To create a variable with a value that can be updated between component calls and re-renders.
- Why can't we just maintain state in a local variable?
  local variables do not persist between re-renders. Each time a component is rendered and mounted to the DOm in React, it will have no connection to previous version of that component and will not have access to any of it's local data.
- What two actions happen when you call a `state setter` function?
  the value of state is cached by React and then value updates when the component is re-rendered.
- When does the local `state variable` get updated with the new value?
  When the component is re-rendered

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
