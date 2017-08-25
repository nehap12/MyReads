import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books : [],
    searchedBooks : []
  };

  //Getting the list of books
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books});
    })
  }

  updateShelfAPI = (Book, Shelf, isBookInShelf) => {
      if(isBookInShelf) {

          Book.shelf = Shelf;
          this.setState((state) => ({
              books: state.books.filter((book) => book.id !== Book.id).concat([Book])
          }));
          BooksAPI.update(Book, Shelf)

      } else {

         BooksAPI.update(Book, Shelf).then((book) => {
             this.setState((state) => {
                 Book.shelf = Shelf;
                 state.books = state.books.concat([Book])
             })
         })

      }

  };


  searchBooks  = (query, maxResults) => {
      BooksAPI.search(query, maxResults).then((searchedBooks) => {
          if(!searchedBooks.error) {
              this.setState((state) => {
                    state.books.map((book) => (
                        searchedBooks.map((sb) => (
                            sb.id === book.id ? sb.shelf = book.shelf : "none"
                            //sb.id === book.id ? console.log(sb):''
                        ))
                    ));
                  state.searchedBooks = searchedBooks
              })
          }
      })
  };


  render() {
    return (
        <div className="app">
          <Route exact path="/" render={() => (
              <ListBooks
                  books={this.state.books}
                  updateShelfAPI={this.updateShelfAPI}
              />
          )}/>
          <Route
              path="/search" render={() => (
              <SearchBooks
                  searchedBooks={this.state.searchedBooks}
                  searchBooks={this.searchBooks}
                  updateShelfAPI={this.updateShelfAPI}
              />
          )}/>

        </div>
    )
  }
}

export default BooksApp
