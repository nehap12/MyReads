import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books : []
  };

  //Getting the list of books
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }

  //Updating the shelf of the Books
  updateShelfAPI = (Book, Shelf) => {
    Book.shelf = Shelf;
    this.setState((state) => ({
      books: state.books.filter((book) => book.id !== Book.id).concat([Book])
    }));
    BooksAPI.update(Book, Shelf)
  }

  render() {
    return (
        <div className="app">
          <ListBooks books={this.state.books} updateShelfAPI={this.updateShelfAPI} />
        </div>
    )
  }
}

export default BooksApp
