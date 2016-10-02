const buildHeaderHTML = require('./buildHeaderHTML')
const buildNavHTML = require('./buildNavHTML')

module.exports = (req) => {
  const pageTitle = 'Node Image detail'
  let body = ''
  body += buildNavHTML()
  body += '<div class="image-detail-container"><img class="image-detail" src="' + req.imageUrl + '" /></div>'

  return '<!DOCTYPE html>' +
    '<html><head>' + buildHeaderHTML(pageTitle) + '</head><body>' + body + '</body></html>'
}
