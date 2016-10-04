const favicon = require('./favicon')
const header = require('./header')
const postRequest = require('./post-request')
const homePage = require('./home-page')
const setImages = require('./set-images')
const showImages = require('./show-images')
const showImageDetails = require('./show-image-detail')
const staticFiles = require('./static-files')

module.exports = [
  favicon,
  header,
  postRequest,
  homePage,
  setImages,
  showImages,
  showImageDetails,
  staticFiles
]
