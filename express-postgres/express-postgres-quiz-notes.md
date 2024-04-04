# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

- How do you tell `pg` which database to connect to?
  with the connectionString property
- How do you send SQL to PostgreSQL from your Express server?
  assigning query to a variable then using the query method on the db variable passing in the sql variable.
- How do you get the rows return from the SQL query?
  the rows property of the returned query object.
- What must you always remember to put around your asynchronous route handlers? Why?
  because out query gets awaited .
- What is a SQL Injection Attack and how do you avoid it in `pg`?
  a way for a malicious attacker to query your databases and get important information or delete your database

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
