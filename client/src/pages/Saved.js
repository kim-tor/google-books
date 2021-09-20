import React, { Component } from 'react'
import { Container } from "../components/Grid/index";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron/index";
import API from '../utils/API';
import SavedList from "../components/SavedList/index";

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    getBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({
                    savedBooks: res.data
                })
            )
            // console.log(res);
            .catch(err => console.log(err));
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook(currentBook.id)
            .then(res => {
                console.log("You deleted this book:", res);
                this.getBooks();
            })
            .catch(err => {
                console.log("This is the error", err);
            })
    }


    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />
                    {this.state.savedBooks.length ? (
                        <SavedList
                            bookState={this.state.savedBooks}
                            Button={() => (
                                <button
                                    onClick={() => this.deleteGoogleBook = {(book.id)}
                                >

                                </button>
                            )}
                        />)
                    </SavedList>
                ) : (
                <h5>No results to display</h5>
                )}
                </Container>
            </div >
        )
    }
}

export default Saved;