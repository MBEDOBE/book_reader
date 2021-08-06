import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book'


const ShelfB = function (props) {

    let handleBookShelfChange = (book, shelf) => {
        props.onBookShelfChange(book, shelf);
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title" style={{textAlign: "center"}}>{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book) => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                booksShelfChange={handleBookShelfChange}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )

}

ShelfB.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}
export default ShelfB