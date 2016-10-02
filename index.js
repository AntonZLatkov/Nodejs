let http = require('http')
let handlers = require('./handlers/index')
let urlNamePOST = require('./modules/url-image-post')
let port = 1337

let server = http
  .createServer((req, res) => {
    for (let handler of handlers) {
      var next = handler(req, res)
      if (!next) {
        break
      }
    }
    if (req.method.toLowerCase() === 'post') {
      urlNamePOST(req, res)
    }
  })
server.listen(port)
console.log(`Server listening on port ${port}`)
