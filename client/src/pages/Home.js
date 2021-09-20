import React, { Component } from "react";
import { Container } from "../components/Grid/index";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron/index";
import { Input, SubmitBtn } from "../components/Search/index";
import API from "../utils/API";
import ResultList from "../components/ResultList/index";
import Book from "../components/Book";

class Home extends Component {
    state = {
        books: [],
        q: "",
    };

    // Create function to handle input data
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    // Create function to search for books through Google API
    getBooks = () => {
        API.getBooks(this.state.q)
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(() =>
                this.setState({
                    books: [],
                    message: "No Books Found"
                })
            );
    };

    // Create function to handle form data submission
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.getBooks();
    };

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);
        API.saveBook({
            googleId: book.id,
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.image,
            link: book.link,
        }).then(() => this.getBooks());
    };

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />
                    <Col size="md-12">
                        <Card title="Book Search" icon="far fa-book">
                            <Form
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                q={this.state.q}
                            />
                        </Card>
                    </Col>
                    <Row>
                        <Col size="md-12">
                            <Card title="Results">
                                {this.state.length ? (
                                    <List>
                                        {this.state.books.map(book => (
                                            <Book
                                                key={book.id}
                                                title={book.title}
                                                subtitle={book.subtitle}
                                                link={book.infoLink}
                                                authors={book.authors}
                                                description={book.description}
                                                image={book.image}
                                                Button={() => (
                                                    <button
                                                        onClick={() => this.handleBookSave(book.id)}
                                                        className="btn btn-primary ml-2"
                                                    >
                                                        Save
                                                    </button>
                                                )}
                                            />
                                        ))}
                                    </List>
                                ) : (
                                    <h2 className="text-center">{this.state.message}</h2>
                                )}
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
