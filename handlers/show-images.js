const url = require('url')
const images = require('../modules/images')
const imageList = images.imageList
const buildImagesHTML = require('../modules/buildImagesHTML')

module.exports = (req, res) => {
  req.pathName = req.pathName || url.parse(req.url).pathname
  if (req.pathName === '/showimages.html') {
    res.write(buildImagesHTML(imageList))
    res.end()
  } else {
    return true
  }
}
