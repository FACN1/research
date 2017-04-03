const hapi = require('hapi')
const bcrypt = require('bcrypt')
//'basic' is an npm module which provides you with a scheme
const basic = require('hapi-auth-basic')

// Set up a basic hapi ser
const server = new hapi.Server()

server.connection({
  port: 3000,
  host: 'localhost'
})

// Define users database
const users = {
  john: {
    username: 'john',
    // '$2a$' indicating that it is a bcrypt hashSync
    // '10$' rounds of hashing
    // 22 char salting
    // 31 char of hashing
    password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',
    // 'secret'
    name: 'John Doe',
    id: '2133d32a'
  },
  jane: {
    username: 'jane',
    // hashed right after setting, before storing in DB
    password: bcrypt.hashSync('password', 0),
    name: 'Jane Doe',
    id: '298uj8'
  }
}
// Create hashed passwords of 'password'. First arg 'user-pword' Second 'Salting rounds'
console.log(bcrypt.hashSync('password', 1))
console.log(bcrypt.hashSync('password', 1))

// Creates the same passwords because using same salt
bcrypt.genSalt(5, function(err, salt){
  console.log(bcrypt.hashSync('password', salt))
  console.log(bcrypt.hashSync('password', salt))
})

// Find out how many rounds of hashing were used to produce hashed password
console.log(bcrypt.getRounds('$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm'))

// Create bad easily crackable hashing function
String.prototype.hashCode = function(){
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

console.log('password'.hashCode())


// Define validation function
const validate = function(request, username, password, callback) {
  const user = users[username]

  if (!user) {
    return callback(null, false)
  }

  bcrypt.compare(password, user.password, (err, isValid) => {
    callback(err, isValid, { id: user.id, name: user.name })
  })
}
// Register basic plugin. Creates a scheme with the name 'basic'.
server.register(basic, (err) => {
  if (err) throw err
// Create a strategy named 'simple' referring to our scheme 'basic'
// Then pass an options object to the scheme to configure it's behavior
  server.auth.strategy('simple', 'basic', { validateFunc: validate })

  server.route({
    method: 'GET',
    path: '/',
    config: {
      auth: 'simple',
      handler: function (request, reply) {
        reply('hello, ' + request.auth.credentials.name)
      }
    }
  })

  server.start((err) => {
    if (err) throw err

    console.log(`Server running on port: ${server.info.uri}`)
  })
})

