const favicon = require('./favicon')
const header = require('./header')
const homePage = require('./home-page')
const setImages = require('./set-images')
const showImages = require('./show-images')
const showImageDetails = require('./show-image-detail')
const staticFiles = require('./static-files')

module.exports = [
  favicon,
  header,
  homePage,
  setImages,
  showImages,
  showImageDetails,
  staticFiles
]
