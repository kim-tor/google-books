   
import React, { Component } from 'react'
import ResultListItem from "../ResultListItem";

class ResultList extends Component {
    render() {
        console.log("Props", this.props.bookState)
        return (
            this.props.bookState.map((book) => (
            <ResultListItem 
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            link={book.volumeInfo.previewLink}
            authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/100x100?text=No+Image+Available"}
            description={book.volumeInfo.description}
            saveGoogleBook={this.props.saveGoogleBook}
            />
        ))
        )
                           
    }
}

export default ResultList
