const formidable = require('formidable')
const images = require('./images')
const imageList = images.imageList

module.exports = (req, res) => {
  const form = new formidable.IncomingForm()

  form.parse(req, (err, fields) => {
    if (err) {
      console.log(err)
    }
    res.writeHead(200, {
      'content-type': 'text/plain'
    })
    const imageName = fields['img-name']
    const imageUrl = fields['img-url']
    if (imageName === '' || imageUrl === '') {
      console.log('Empty')
      res.writeHead(403, {
        'Location': '../content/restricted.html'
      })
      res.end()
      return true
    } else {
      imageList.push({
        imageName: imageName,
        imageUrl: imageUrl
      })
    }
  })
}
