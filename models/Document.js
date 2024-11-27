const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    filePath: {
        type: String,
        required: true,
    },
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
