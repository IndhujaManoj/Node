const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    imdbID: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    year: {
        required: true,
        type: String
    },
    runTime: {
        required: true,
        type: String
    },
    genre: {
        required: true,
        type: String
    },
    writer: {
        required: true,
        type: String
    },
    actors: {
        required: true,
        type: String
    },
    plot: String, 
    images: {
        required: true,
        type: Array
    },
    imdbRating: String // 'Ratting' corrected to 'Rating'
});

module.exports = mongoose.model('Data', dataSchema);
