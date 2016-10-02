function checkFormEmpty(formSubmitSelectors, fieldArray, errorMsg) {
  $(formSubmitSelectors).on('click', function(event) {
    var isValid = true
    $.each(fieldArray, function(index, val) {
       if ($(val).val() === '') {
        isValid = false
        alert(errorMsg)
        return false
       }
    })
    if (!isValid) {
      event.preventDefault()
    }
  })
}

function checkImageRequest(formSelector, urlSelector, dataType, errorMessage) {
  $(formSelector).on('submit', function(event) {
    if (!$(this).attr('validated')) {
      event.preventDefault()
      var url = $(urlSelector).val()
      $.ajax({
        type: 'GET',
        url: url,
        error: function() {
          alert(errorMessage)
        },
        success: function(res, status, xhr) {
          console.log('Success')
          var contentType = xhr.getResponseHeader('content-type') || ''
          if (contentType == 'image/jpg') {
            $(formSelector).attr('validated', true)
            $(formSelector).submit()
          } else {
            alert(errorMessage)
          }
        }
      })
      return false
    }
    return true
  })
}