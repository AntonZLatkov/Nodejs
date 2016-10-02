const buildHeaderHTML = require('./buildHeaderHTML')
const buildNavHTML = require('./buildNavHTML')

module.exports = (req) => {
  const pageTitle = 'Node Images'
  let body = ''
  const baseDir = './content'
  body += buildNavHTML()
  for (let image of req) {
    body += '<li><div class="list-item-name">Name: ' + image.imageName + '</div><div class="list-item-image-url">URL: <a href="' + baseDir + '/images/details/' + image.imageName + '.html" class="list-item-image-link">' + image.imageUrl + '</a></div><div class="list-item-image"></div></li>'
  }
  body += '</ul>'

  return '<!DOCTYPE html>' +
    '<html><head>' + buildHeaderHTML(pageTitle) + '</head><body>' + body + '</body></html>'
}
