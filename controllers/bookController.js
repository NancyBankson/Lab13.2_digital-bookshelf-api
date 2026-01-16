const Book = require("./models/Book")

async function getAllBooks(req, res) {
    try {
        const foundBooks = await Book.findById({});
        if (foundBooks) {
            res.json(foundBooks);
        } else {
            res.status(400).json({ error: "Book list not found." })
        }
    } catch (error) {
        res.status(400).json({ error: "Error getting book list." })
    }
}

async function getSingleBook(req, res) {
    try {
        const bookId = req.params.id;
        const foundBook = await Book.findById(bookId);
        if (foundBook) {
            res.json(foundBook);
        } else {
            res.status(400).json({ error: "Book not found." })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Id." })
    }
}

async function createNewBook(req, res) {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        console.error("Error creating book:", error);
        res.status(400).json({ error: "Failed to create book.", details: error.message });
    }
}

async function updateBook(req, res) {
    try {
        const editedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(editedBook);
    } catch (error) {
        console.error("Error editing book:", error);
        res.status(400).json({ error: "Failed to edit book.", details: error.message });
    }
}

async function deleteBook(req, res) {
    try {
        const bookId = req.params.id;
        const deleteBook = await Book.findByIdAndDelete(req.params.id);
        if (deleteBook) {
            console.log("Product deleted:", deleteBook.title);
        } else {
            console.log("Could not find book.");
        }
        res.send("Book deleted.");
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(400).json({ error: "Failed to delete book.", details: error.message });
    }
}

module.exports = {
    getAllBooks,
    getSingleBook,
    createNewBook,
    updateBook,
    deleteBook
};