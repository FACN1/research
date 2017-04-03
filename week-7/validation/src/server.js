const hapi = require('hapi');
const joi = require('joi');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
})

// const schema = joi.object().keys({
// });

const routes = [
  {
    method: 'GET',
    path: '/login/{email}/{password}',
    handler: (request, reply) => {
      reply('Log-in successful')
    },
    config: {
      validate: {
        params: {
          email: joi.string().email().required(),
          password: joi.string().regex(/^[a-zA-Z0-9]{8,20}$/).required()
        }
      }
    }
  }
]

server.route(routes)

server.start((error) => {
  if (error) throw error;
  console.log('server is doing its thing on: ',server.info.uri);
})
