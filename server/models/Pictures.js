const mongoose = require('mongoose');

const PicturesSchema = mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number
});

module.exports = mongoose.model('user', PicturesSchema);