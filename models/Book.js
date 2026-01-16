const mongoose = require('mongoose');
const { Schema } = mongoose;

// create the new schema for Book

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        message: "Title is required."
    },
    author: {
        type: String,
        required: true,
        message: "Author is required."
    },
    isbn: {
        type: String
    },
    publishedDate: {
        type: Date
    },
    inStock: {
        type: Boolean,
        dafault: true
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;