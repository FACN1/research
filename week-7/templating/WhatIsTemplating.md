<h1>Templating with helper functions</h1>

<h2> What are helper functions in handlebars? </h2>

<h3> First of all, what are handlebar templates?</h3>

Handlebars templates are just like regular HTML, but also give you the ability to embed expressions that change what is displayed

If you're not using build tools, you can **define** your application's main template inside your HTML by putting it inside a script tag, which is what we just did in this morning challenge when we put **curly brackets** inside the name of the property that we are using from our template, in our case, the first properties that we used were title and post from our sayHello function. This is in our first test, we called title and post from sayhello

These expressions (and the other Handlebars features you will learn about next) are bindings aware. That means that if the values used by your templates ever change, your HTML will be updated automatically.

As your application grows in size, it will have many templates, each bound to different controllers.

which gets us to...

<h3> What are helpers? Why should be used</h3>

Sometimes, you may use the same HTML in your application multiple times. In those cases, you can register a custom helper that can be invoked from any Handlebars template.

For example, imagine you are frequently wrapping certain values in a <span> tag with a custom class. You can register a helper from your JavaScript like this:
```javascript
Ember.Handlebars.helper('highlight', function(value, options) {

  var escaped = Handlebars.Utils.escapeExpression(value);

  return new Ember.Handlebars.SafeString('<span class="highlight">' + escaped + '</span>');
});
```
Anywhere in your Handlebars templates, you can now invoke this helper:
```
{{highlight name}}
```
and it will output the following:
```
<span class="highlight">Peter</span>
```

Now, whenever the context's person changes, or when any of the dependent keys change, the output will automatically update the DOM with the new value.




nice sources:

https://guides.emberjs.com/v1.10.0/templates/handlebars-basics/

http://handlebarsjs.com/

http://handlebarsjs.com/expressions.html

https://www.sitepoint.com/a-beginners-guide-to-handlebars/
