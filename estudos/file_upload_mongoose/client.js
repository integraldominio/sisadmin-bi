const axios = require('axios')

function uploadImage () {
  const files = document.getElementById('INPUT_TAG').files
  const formData = new FormData()
  formData.append('image', files[0])
  axios.post('YOUR_URL/api/image', formData)
}