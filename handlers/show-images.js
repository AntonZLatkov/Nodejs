const url = require('url')
const fs = require('fs')
const buildImagesHTML = require('../modules/buildImagesHTML')
const pathNameDB = './db/imageDB.json'

module.exports = (req, res) => {
  req.pathName = req.pathName || url.parse(req.url).pathname
  if (req.pathName === '/showimages.html') {
    fs.exists(pathNameDB, (exists) => {
      if (exists) {
        fs.readFile(pathNameDB, 'utf8', (err, data) => {
          if (err) console.log(err)
          let arrData = [JSON.parse(data)]
          // console.log(arrData)
          res.write(buildImagesHTML(arrData))
          res.end()
          return true
        })
      }
    })
  } else {
    return true
  }
}
