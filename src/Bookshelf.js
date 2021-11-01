import React, { Component } from 'react'
import BooksGrid from './BooksGrid.js'

class Bookshelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf.name}</h2>
                <div className="bookshelf-books">
                    <BooksGrid books={this.props.books} />
                </div>
            </div>
        )
    }
}

export default Bookshelf
