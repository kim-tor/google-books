import React, { Component } from 'react'
import { Container } from "../components/Grid/index";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron/index";
import API from '../utils/API';
import { List } from "../components/List";
import Book from '../components/Book';
import Card from '../components/Card/';
class Saved extends Component {

    state = {
        books: []
    }

    componentDidMount = () => {
        this.getSavedBooks()
    }

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                this.setState({
                    savedBooks: res.data
                })
            )
            // console.log(res);
            .catch(err => console.log(err));
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            // console.log(res);
            this.getSavedBooks();
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />
                    <Card title="Saved Books">
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <Book
                                    key={book._id}
                                    title={book.title}
                                    subtitle={book.subtitle}
                                    link={book.link}
                                    authors={book.authors.join(", ")}
                                    description={book.description}
                                    image={book.image}
                                    Button={() => (
                                      <button
                                        onClick={() => this.handleBookDelete(book._id)}
                                        className="btn btn-danger ml-2"
                                      >
                                        Delete
                                      </button>
                                    )}
                                  />
                                ))}
                            </List>
                        ) : (<h2 className="text-center">No Saved Books</h2>
                        )}

                    </Card>

                </Container>
            </div >
        )
    }
}

export default Saved;