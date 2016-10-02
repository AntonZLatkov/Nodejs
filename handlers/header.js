const images = require('../modules/images')
const imageList = images.imageList
const buildHeaderPageHTML = require('../modules/buildHeaderPageHTML')

module.exports = (req, res) => {
  if (req.headers['statusheader'] === 'Full') {
    let count = imageList.length
    let HTML = buildHeaderPageHTML(count)
    res.write(HTML)
    res.end()
  } else {
    return true
  }
}
