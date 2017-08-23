/**
 * Created by NehaP on 8/21/2017.
 */

import React, { Component } from 'react'
import Book from './Book'

class Read extends Component {

    updateBookShelf = (Book, Shelf) => {
        this.props.updateReadShelf(Book, Shelf);
    }

    render() {
        return (
            <ol className="books-grid">
                {this.props.books.map((book) => (
                    <li key={book.id}>
                    <Book book={book} updateBookShelf={this.updateBookShelf} />
                    </li>
                ))}
            </ol>
        )
    }

}


export default Read