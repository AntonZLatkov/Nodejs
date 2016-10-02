const fs = require('fs')
const url = require('url')

module.exports = (req, res) => {
  req.pathName = req.pathName || url.parse(req.url).pathname

  if (req.pathName === '/favicon.ico') {
    fs.readFile('./favicon.ico', (err, data) => {
      if (err) console.log(err)

      res.writeHead(200, 'All ok')
      res.write(data)
      res.end()
      return true
    })
  } else {
    return true
  }
}
