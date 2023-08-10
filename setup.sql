DROP TABLE IF EXISTS books;



CREATE TABLE books (
    isbn INT,
    book_name VARCHAR (50) NOT NULL,
    author_name VARCHAR (50) NOT NULL,
    about VARCHAR (50) NOT NULL,
    year_published INT,
    PRIMARY KEY (isbn)
);


INSERT INTO books 
    (isbn, book_name, author_name, about, year_published)
VALUES 
    (101, 'Crime and punishment', 'FD', 'guilt and murder', 1890), 
    (304, 'Pride and prejudice', 'Jane Austen', 'Love and romance', 1813), 
    (448, 'To kill a mockingbird', 'Harper Lee', 'Racial Justice', 1960), 
    (893, 'War horse', 'Michael Morpurgo', 'War', 1982),
    (478, 'The Butterfly Lion', 'Michael Morpurgo', 'Coming of age', 1996);



