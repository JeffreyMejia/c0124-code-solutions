# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  logical operators for checking boolean values. They can be used outside of `if` statements by checking logic and preforming certain tasks depending on the boolean value.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  It is a way for the logical operators to be used outside of `if` statements. Expressions are examined left to right looking for the expected result.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  It checks for null and undefined which || does not
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It is a shorthand method. `boolean expression ? expression if truthy: expression if falsy`
- What is the `?.` (optional chaining) operator? When would you use it?
  similar to a normal `.` chaining operator it is used to access object properties or calls a function. It is best used to not run into errors and to look up properties or index.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  It expands the elements of an array or the properties of an object. [] for arrays and {} for objects
- What data types can be spread into an array? Into an object?
  For arrays only iterables but for objects all primitive data types.
- How does spread syntax differ from rest syntax?
  It expands the elements of an array but rest condenses them

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
