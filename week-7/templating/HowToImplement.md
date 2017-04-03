## How To Implement Helper Functions In Handlebars

#### Registering a Handlebars helper
```js
var Handlebars = require('handlebars');

Handlebars.registerHelper('link', function(name, age) {
  // do something with the parameters
  var newString = name + ' is ' + age;
  return newString;
});
```
- Here the helper function is called `link`
- It takes two parameters (`name` and `age`), does something with them, and then returns something

#### Calling  a helper within a `.hbs` file
```html
<article>
  {{link name age}}
</article>
```
- Here `link` is the name of the Handlebars helper, and `name` and `age` are parameters passed to the helper - you could think of it like `link(name, age)`

#### Parameters: Strings, Numbers, Booleans
- In the above examples, `name` and `age` are key-value pairs that are passed to the template as an object, where they can be accessed and passed to the helper function:
```js
var context = {name: 'caesar', age: 55};
var html = template(context);
```
```html
<!-- html / hbs template file -->
{{link name age}} <!-- caesar is 55 -->
```

- You can instead pass strings, numbers and booleans as parameters
```html
<!-- html / hbs template file -->
{{link "augustus", 90}} <!-- augustus is 90 -->
```

#### Hash Arguments
- Helpers can receive an optional sequence of key-value pairs as their **final parameter**, referred to as _hash arguments_
- These key-value pairs can be accessed within the helper function from the `hash` property of the helper's final parameter

```html
<!-- html / hbs template file -->
{{link name age food="hummus" address="naz"}}
```
```js
var Handlebars = require('handlebars');

Handlebars.registerHelper('link', function(name, age, options) {
  console.log(options.hash); // {food: 'hummus', address: 'naz'}
});
```

- This could be useful when creating an html element with parameters:

```html
<!-- html / hbs template file -->
{{link "See more..." href="story.url" class="story"}}
```
```js
Handlebars.registerHelper('link', function(text, options) {
  var attrs = [];

  for (var prop in options.hash) {
    attrs.push(prop + '="' + options.hash[prop] + '"');
  }

  return "<a " + attrs.join(" ") + ">" + text + "</a>";
  // <a href="story.url" class="story">See more...</a>
});
```

#### References
- http://handlebarsjs.com/expressions.html
- [Example a la Mavis](https://github.com/m4v15/templates)
