const db =require(`../db`)



class Book {
    constructor(books) {
        this.isbn = books.isbn;
        this.book_name = books.book_name;
        this.author_name = books.author_name;
        this.about = books.about;
        this.year_published = books.year_published;
    }

    static async showAll() {
        const data = await db.query("SELECT * FROM books")
        return data.rows

    }

    static async showBook(id) {
        const data = await db.query(`SELECT * FROM books WHERE (isbn = ${id})`)
        return data.rows
    }

    static async create(book) { 
        await db.query(`INSERT INTO books (isbn, book_name, author_name, about, year_published) VALUES ($1, $2, $3, $4, $5)`, [book.isbn, book.book_name, book.author_name, book.about, book.year_published])
    }

}

module.exports = Book