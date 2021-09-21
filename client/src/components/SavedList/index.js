   
import React, { Component } from 'react';
import SavedListItem from "../SavedListItem";

class SaveList extends Component {
    render() {
        console.log("Props", this.props.bookState)
        return (
            this.props.bookState.map((book) => (
            <SavedListItem 
            key={book._id}
            id={book._id}
            title={book.volumeInfo.title}
            link={book.volumeInfo.link}
            authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.voluemInfo.authors}
            image={book.volumeInfo.image ? book.volumeInfo.image : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"}
            description={book.volumeInfo.description}
            deleteGoogleBook={this.props.deleteGoogleBook}
            />
        ))
        )
                           
    }
}

export default SaveList