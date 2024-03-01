# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  async creates a binding of a new async function to a given name. await is used to wait for a promise and get its fulfillment value.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  await can only be used within an async function. The promise keyword is not needed in async function.
- When do you use `async`?
  when we want to return a promise
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  when we want to pause the execution of code within a function. If not then we don't use it because it will await the fulfillment of a promise before execution resumes
- How do you handle errors with `await`?
  By using `try...catch` statements.
- What do `try`, `catch` and `throw` do? When do you use them?
  try gives the code to execute if the promise is fulfilled but also gives the exception for the catch. Throw lets us throw the exception to be used. It can be used on any kind of expression. Catch will come into play if the code in try fails and generate an error message of some kind ideally.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the code execution will resume because the await isn't there to pause it. `await` throws the rejected value so if it isn't there then the error doesn't get thrown.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  callbacks because I find it less confusing for the time being.

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
