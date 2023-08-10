const Book = require(`../models/Book`)



const index = async (req, res) => {
    try {
        const books = await Book.showAll();
        res.send(books)
    } catch (error) {
        res.status(418).send(`OOPS`)
    }
};

const showBook = async (req, res) => {
    try {
        const book = await Book.showBook(req.params.id);
        res.send(book)
    } catch (error) {
        res.status(418).send('NO BOOK YOU IDIOT')
    }
}

const create = async (req, res) => {
    try {
        await Book.create(req.body)
      
        res.send(`Book added`)
    } catch (error) {
        res.status(418).send(`BOOK NOT ADDED DUE TO ERROR`)
    }
}

const update = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {index, showBook, create}