const multer = require('multer');
const path = require('path');
const { STATIC_PATH } = require('../utils/static');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(STATIC_PATH, 'images'));
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

function fileFilter (req, file, cb) {
  const MIMETYPE = /^image\/(png|svg|jpg|gif|jpeg|webp|avif)$/;
  cb(null, MIMETYPE.test(file.mimetype));
}

const upload = multer({
  storage,
  fileFilter,
});

module.exports.uploadPhoto = upload.single('petPhoto');
