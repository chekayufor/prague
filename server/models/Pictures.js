const mongoose = require('mongoose');

const PicturesSchema = mongoose.Schema({
    name: {
        data: Buffer,
        contentType: String
        }
});

module.exports = mongoose.model('user', PicturesSchema);