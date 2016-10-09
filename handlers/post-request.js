const fs = require('fs')
// const query = require('querystring')
const images = require('../modules/images')
const imageList = images.imageList
const multiparty = require('multiparty')
// const crypt = require('../modules/crypt')
const uploadDir = '/content/images/'
let updateDB = require('../modules/updateDB')
let imageName = ''
let imageCategory = ''
let imageURL = ''

module.exports = (req, res) => {
  let pushImageData = (name, category, url) => {
    if (name !== '' && category !== '' && url !== '') {
      imageList.push({
        imageName: name,
        imageCat: category,
        imageUrl: url
      })
      console.log(imageList)
      updateDB(req, res, name, category, url)
    }
  }
  if (req.method === 'POST') {
    let form = new multiparty.Form()
    form.parse(req)
    form.on('part', (part) => {
      if (part.filename) {
        const fileExists = () => {
          fs.exists('.' + uploadDir + part.filename, (exists) => {
            if (!exists) {
              let fileBody = new Buffer('')
              part.on('data', (data) => {
                fileBody = Buffer.concat([fileBody, data])
              })
              part.on('end', () => {
                fs.writeFile('.' + uploadDir + part.filename, fileBody, 'binary', err => {
                  if (err) console.log(err)
                  imageURL = '.' + uploadDir + part.filename
                  pushImageData(imageName, imageCategory, imageURL)
                  res.writeHead(200, 'Upload successful', {
                    'Content-Type': 'image/jpeg'
                  })
                  console.log('Uploaded!')
                  res.end()
                })
              })
            } else {
              console.log('File already exists!')
            }
          })
        }
        fs.exists('.' + uploadDir, (exists) => {
          if (!exists) {
            fs.mkdir('.' + uploadDir, (err) => {
              if (err) console.log(err)
              fileExists()
            })
          } else {
            console.log('Directory already exists!')
            fileExists()
          }
        })
      } else {
        let body = ''
        part.on('data', (data) => {
          body += data
        })
        part.on('end', () => {
          if (part.name === 'img-name') {
            imageName = body
          } else if (part.name === 'img-category') {
            imageCategory = body
          }
        })
      }
    })
  }
  return true
}
