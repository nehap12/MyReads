/**
 * Created by NehaP on 8/21/2017.
 */

import React, { Component } from 'react'

class ShelfChanger extends Component {
    state = {
        value: this.props.selected.shelf
    };

    updateStateAndSendValue = (value) => {
        this.setState({value: value});
        this.props.updateShelf(this.props.selected, value);
    }

    handleChange = (event) => {
      this.setState({value: event.target.value});
    };

    render() {
        return (
            <select value={this.state.value} onChange={(event) => this.updateStateAndSendValue(event.target.value)}>
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