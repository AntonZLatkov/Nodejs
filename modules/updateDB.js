const fs = require('fs')
const dbDir = '/db/'
const dbFile = 'imageDB.json'
let dbCurrData = ''

module.exports = (req, res, name, category, url) => {
  dbCurrData = {
    imageName: name,
    imageCat: category,
    imageUrl: url
  }
  const fileExists = () => {
    fs.exists('.' + dbDir + dbFile, (exists) => {
      if (!exists) {
        fs.writeFile('.' + dbDir + dbFile, JSON.stringify(dbCurrData), err => {
          if (err) console.log(err)
          res.writeHead(200, 'Update successful', {
            'Content-Type': 'application/json'
          })
          // console.log('Created new file with data!')
          res.end()
        })
      } else {
        fs.appendFile('.' + dbDir + dbFile, ',' + JSON.stringify(dbCurrData), (err) => {
          if (err) console.log(err)
          // console.log('Updated with new data!')
        })
      }
    })
  }
  fs.exists('.' + dbDir, (exists) => {
    if (!exists) {
      fs.mkdir('.' + dbDir, (err) => {
        if (err) console.log(err)
        fileExists()
      })
    } else {
      // console.log('Directory already exists!')
      fileExists()
    }
  })
}
