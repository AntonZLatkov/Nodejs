const buildHeaderHTML = require('./buildHeaderHTML')
const buildNavHTML = require('./buildNavHTML')
const buildInstructionHTML = require('./buildInstructionHTML')

module.exports = () => {
  const pageTitle = 'Node Set Images'
  let body = ''
  body += buildNavHTML()
  body += buildInstructionHTML()
  body += '<div class="form-container"> <form id="submitImages" action="" method="post"> <div class="label-input-wrapper"> <label for="img-name" class="form-label">Name:</label> <input type="text" id="name" name="img-name" placeholder="Enter the image name:"/> </div> <div class="label-input-wrapper"> <label for="img-url" class="form-label">URL:</label> <input type="text" id="url" name="img-url" placeholder="Enter the image URL:"/> </div> <div class="button-wrapper"> <input type="submit" value="Submit" id="submit-form" /> </div> </form> </div>'
  body += '<script>$(document).ready(function() { checkFormEmpty("#submit-form",["#name", "#url"],"All fields must be filled in");checkImageRequest("#submitImages","#url","image/jpeg","Invalid url!")})</script>'
  return '<!DOCTYPE html>' +
    '<html><head>' + buildHeaderHTML(pageTitle) + '</head><body>' + body + '</body></html>'
}