const express = require('express');
const app = express();
const Image = require('./Image.js');
const multer = require('multer');
const path = require('path');

const UPLOAD_PATH = path.resolve(__dirname, './uploads');


const upload = multer({
  dest: UPLOAD_PATH,
  limits: {fileSize: 1000000, files: 5}
});

// upload image
app.post('/api/image', upload.array('image', 5), (req, res, next) => {

    const images = req.files.map((file) => {
    return {
      filename: file.filename,
      originalname: file.originalname
    }
  });

  Image.insertMany(images, (err, result) => {
    if (err) return res.sendStatus(404)
    res.json(result)
  });

});

// get image with id
app.get('/:id', (req, res, next) => {
  Image.findOne({_id: req.params.id}, (err, image) => {
    if (err) return res.sendStatus(404)
    fs.createReadStream(path.resolve(UPLOAD_PATH, image.filename)).pipe(res)
  });
});


app.listen(3000, function() {
    console.log('Listening on port 3000...')
});