const url = require('url')
const fs = require('fs')
const pathNameDB = './db/imageDB.json'
const buildImageDetailsHTML = require('../modules/buildImageDetailsHTML')

module.exports = (req, res) => {
  const directory = '/content/images/details/'
  req.pathName = req.pathName || url.parse(req.url).pathname
  fs.exists(pathNameDB, (exists) => {
    if (exists) {
      fs.readFile(pathNameDB, 'utf8', (err, data) => {
        if (err) console.log(err)
        let arrData = [JSON.parse(data)]
        let filteredImageList = arrData.filter(el => directory + el.imageName + '.html' === req.pathName)
        if (filteredImageList.length) {
          console.log('read!', filteredImageList)
          res.write(buildImageDetailsHTML(filteredImageList[0]))
          res.end()
        } else {
          return true
        }
      })
    }
  })
  return true
}
