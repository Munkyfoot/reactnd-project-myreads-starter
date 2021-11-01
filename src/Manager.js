import React, { Component } from 'react'
import Bookshelf from './Bookshelf.js'
import { Link } from 'react-router-dom'

class Manager extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf />
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                    ><button>Add a book</button></Link>
                </div>
            </div>
        )
    }
}

export default Manager