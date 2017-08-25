/**
 * Created by NehaP on 8/21/2017.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/*import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'*/
import Book from './Book'

class SearchBooks extends Component {

    updateQuery = (query) => {
        if(query) {
            this.props.searchBooks(query, 20);
        }

    };

    updateBookShelf = (Book, Shelf, isBookInShelf) => {
        this.props.updateShelfAPI(Book, Shelf, isBookInShelf);
    };



render () {
    return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.searchedBooks.map((book) => (
                        <li key={book.id}>
                            <Book book={book} updateBookShelf={this.updateBookShelf} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
}

export default SearchBooks