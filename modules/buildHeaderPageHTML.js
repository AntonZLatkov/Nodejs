const buildHeaderHTML = require('./buildHeaderHTML')
const buildNavHTML = require('./buildNavHTML')

module.exports = (res) => {
  const pageTitle = 'Node Header handler'
  let body = ''
  body += buildNavHTML()
  body += `<div class="image-count">${res}</div>`
  return '<!DOCTYPE html>' +
    '<html><head>' + buildHeaderHTML(pageTitle) + '</head><body>' + body + '</body></html>'
}
