/**
 * Created by NehaP on 8/22/2017.
 */


import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {

    updateBookShelf = (Book, Shelf) => {
        this.props.updateBookShelf(Book, Shelf);
    };

    render(){
        let counter = 1;
        let {book} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 192,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                    }}></div>
                    <div className="book-shelf-changer">
                        <ShelfChanger selected={book} updateShelf={this.updateBookShelf} />
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors.map((author) => (
                    <div key={counter++} className="book-authors">{author}</div>
                ))}
            </div>
        )

    }

}

export default Book