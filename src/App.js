import React, { Component } from 'react';
import * as BooksApi from './BooksApi';
import './App.css';
import { Route, Link } from 'react-router-dom';
import SearchBar from './Searchbar';
import BookStatus from './BookCategories';

class App extends Component {
  state={
    books: []
  }

  componentDidMount() {
    BooksApi.getAll().then((books) => {
      this.setState({
          books: books
      });
    })
  }

  moveBookShelf = (book, newValue) => {

      book.props.book.shelf = newValue;

      this.setState( (state) => ({
          books: state.books.filter( (b) => b.id !== book.props.book.id).concat([book.props.book])
      }))

      BooksApi.update(book.props.book, newValue);

  }

  render(){
    return (
    <div className="App">
      <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MY READS</h1>
              </div>
              <BookStatus
                books={this.state.books}
                onBookShelfChange={this.moveBookShelf}
              />
              <div className="open-search">
                <Link
                  to="/search"
                >Add a book</Link>
              </div>
            </div>
        )}
        />

        <Route path="/search" render={() => (
            <SearchBar
                bsBooks={this.state.books}
                onBookShelfChange={this.moveBookShelf}
            />
        )}

        />
    </div>
  );
  }
  
}

export default App;
