/**
 * Created by NehaP on 8/21/2017.
 */

import React, { Component } from 'react'

class ShelfChanger extends Component {

    handleChange = (event) => {
        event.preventDefault()
        if(this.props.updateShelf)
            this.props.updateShelf(this.props.selected, event.target.value, this.props.isBookInShelf);
    };

    render() {

        //console.log(this.props);
        const inShelf = this.props.isBookInShelf? this.props.selected.shelf : "none";

        return (
            <select value={inShelf} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }

}

export default ShelfChanger