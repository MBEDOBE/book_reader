import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfA from './ShelfA';
import ShelfB from './ShelfB';
import ShelfC from './ShelfC'



class BookStatus extends Component{

    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookShelfChange: PropTypes.func.isRequired
    }

     handleBookShelfChange = (book, shelf) => {
        this.props.onBookShelfChange(book, shelf);
    }

    render(){
        return(
            <div className="list-books-content">
                <div>
                    <ShelfA
                        title="Currently Reading"
                        cat="currentlyReading"
                        books={this.props.books.filter(bs => bs.shelf === 'currentlyReading')}
                        onBookShelfChange={this.handleBookShelfChange}
                    />
                    <ShelfB
                        title="Want to Read"
                        cat="wantToRead"
                        books={this.props.books.filter(bs => bs.shelf === 'wantToRead')}
                        onBookShelfChange={this.handleBookShelfChange}
                    />
                    <ShelfC
                        title="Read"
                        cat="read"
                        books={this.props.books.filter(bs => bs.shelf === 'read')}
                        onBookShelfChange={this.handleBookShelfChange}
                    />
                </div>
            </div>
        )
    }
}
export default BookStatus