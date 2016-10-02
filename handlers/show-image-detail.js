const url = require('url')
const images = require('../modules/images')
const imageList = images.imageList
const buildImageDetailsHTML = require('../modules/buildImageDetailsHTML')

module.exports = (req, res) => {
  const directory = '/content/images/details/'
  req.pathName = req.pathName || url.parse(req.url).pathname
  var filteredImageList = imageList.filter(el => directory + el.imageName + '.html' === req.pathName)
  if (filteredImageList.length) {
    res.write(buildImageDetailsHTML(filteredImageList[0]))
    res.end()
  } else {
    return true
  }
}
