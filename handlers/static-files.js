const fs = require('fs')
const url = require('url')

function getContentType (url) {
  let contentType = 'text/plain'

  if (url.endsWith('.css')) {
    contentType = 'text/css'
  } else if (url.endsWith('.js')) {
    contentType = 'application/javascript'
  } else if (url.endsWith('.html')) {
    contentType = 'text/html'
  } else if (url.endsWith('.jpg')) {
    contentType = 'image/jpeg'
  } else {
    contentType = ''
  }
  return contentType
}
module.exports = (req, res) => {
  req.pathName = req.pathName || url.parse(req.url).pathname
  if (req.pathName.startsWith('/content/') && getContentType(req.pathName) !== '') {
    fs.readFile('.' + req.pathName, (err, data) => {
      if (err) {
        res.writeHead(404, 'Page Not Found')
        res.write('404 Page Not Found')
        res.end()
        return true
      }
      let contentType = getContentType(req.pathName)
      res.writeHead(200, 'All good', {
        'Content-Type': contentType
      })
      res.write(data)
      res.end()
      return true
    })
  } else {
    res.writeHead(403, 'Restricted path/content')
    res.write('403 - Not allowed')
    res.end()
    return true
  }
}
