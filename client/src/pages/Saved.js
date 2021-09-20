import React, { Component } from 'react'
import { Container } from "../components/Grid/index";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron/index";
import API from '../utils/API';
// import { List } from "../components/List";
// import Book from '../components/Book';
// import Card from '../components/Card/';
import Results from '../components/Results'
class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        API.savedBooks()
        .then(savedBooks => this.setState({ savedBooks: savedBooks }))
        .catch(err => console.error(err));
    }

    // deleteGoogleBook = currentBook => {
    //     API.deleteBook(currentBook.id)
    //         .then(res => {
    //             // console.log(res);
    //             this.getSavedBooks();
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />

                    <div className="container">
                        <h2>Saved books</h2>
                        <Results books={this.state.savedBooks} />
                    </div>
                    )
                </Container>
            </div >
        )
    }
}

export default Saved;