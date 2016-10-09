const fs = require('fs')
const dbDir = './db/'
const dbFile = 'imageDB.json'

module.exports = (req, res) => {
  console.log('clearOldDb', __dirname)
  const fileExists = () => {
    fs.exists(dbDir + dbFile, (exists) => {
      if (exists) {
        // console.log('file exists')
        fs.unlink(dbDir + dbFile)
      }
    })
  }

  fs.exists(dbDir, (exists) => {
    if (exists) {
      // console.log('directory exists')
      fileExists()
    }
  })
}
