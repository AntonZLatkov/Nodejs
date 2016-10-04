const http = require('http')
const handlers = require('./handlers/index')
const port = process.env.PORT || 1337
const environment = process.env.NODE_ENV

let database = '/localdatabase/'

if (environment === 'production') {
  database = 'db://readsdsd'
}

console.log(environment, database)

const server = http
  .createServer((req, res) => {
    for (let handler of handlers) {
      let next = handler(req, res)
      if (!next) {
        break
      }
    }
  })
server.listen(port)
console.log(`Server listening on port ${port}`)
