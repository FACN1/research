# The Joi of Validation with Hapi

### WHY?
Its important to check data being inputted into your programme. Invalid data can throw errors, which are better caught as soon as possible, rather than after they've crashed your server!

### WHAT?
Joi is a hapi module which checks the payloads of requests and responses going in and out of a server.

Joi allows you to create blueprints or schemas for javascript objects to ensure validation of key information.

By default, all validators are set to ```true```, which means no validation is being performed, and everything passes through unchecked.


### HOW?

Install and require ```hapi``` and ```joi ``` into your server file.

In your route, in addition to your method, path and handler, you can set validation parameters in the ```config``` object on a route, and is able to validate headers, path parameters, query parameters, and payload data.

``` js

server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: function (request, reply) {
        reply('Hello ' + request.params.name + '!');
    },
    config: {
        validate: {
            params: {
                name: Joi.string().min(3).max(10)
            }
        }
    }
});
```

Example using a schema:

``` js

const bookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    isbn: Joi.string().length(10),
    pageCount: Joi.number(),
    datePublished: Joi.date().iso()
});

```

``` js

joi.validate(data, schema, callback)

// callback is an optional callback function which takes an error and the validated data.

```

Useful links:

[Joi Documentation](https://github.com/hapijs/joi)

[Hapi Validation documentation](https://hapijs.com/tutorials/validation)

[The Joi Of Validation](http://vawks.com/blog/2014/03/22/the-joi-of-validation/)

https://github.com/hapijs/joi/blob/master/API.md#joi
