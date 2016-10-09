const url = require('url')
const buildSetImageHTML = require('../modules/buildSetImageHTML')

module.exports = (req, res) => {
  req.pathName = req.pathName || url.parse(req.url).pathname
  if (req.pathName === '/') { // homepage
    res.write(buildSetImageHTML())
    res.end()
  } else {
    return true
  }
}
