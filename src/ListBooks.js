/**
 * Created by NehaP on 8/21/2017.
 */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './read'

class ListBooks extends Component {

    updateShelf = (Book, Shelf, isBookInShelf) => {
        this.props.updateShelfAPI(Book, Shelf, isBookInShelf);
    };


    render() {
        const { books } = this.props;
        let currentlyReading, wantToRead, read;
        currentlyReading = books.filter(book => book.shelf === "currentlyReading");
        wantToRead = books.filter((book) => book.shelf === "wantToRead");
        read = books.filter((book) => book.shelf === "read");

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <CurrentlyReading books={currentlyReading} updateReadShelf={this.updateShelf} />
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <WantToRead books={wantToRead} updateReadShelf={this.updateShelf}/>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <Read books={read} updateReadShelf={this.updateShelf} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                        className="search"
                    >
                        Add a book
                    </Link>
                </div>
            </div>
        )
    }
}


export default ListBooks