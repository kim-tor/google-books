import React, { Component } from "react";
import { Container, Col, Row } from "../components/Grid/index";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron/index";
import API from "../utils/API";
import Form from "../components/Form";
import Results from "../components/Results";
import Card from "../components/Card";



class Home extends Component {
    state = {
        books: [],
        q: "",
    };

    componentDidMount() {
        this.getBooks();
    };

    makeBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    };

    // Create function to search for books through Google API
    getBooks = q => {
        API.getBooks(q)
            .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
            .catch(err => console.error(err));
    };

    // Create function to handle input data
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    // Create function to handle form data submission
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.getBooks(this.state.q);
    };

    // handleBookSave = id => {
    //     const book = this.state.books.find(book => book.id === id);
    //     API.saveBook({
    //         googleId: book.id,
    //         title: book.title,
    //         authors: book.authors,
    //         description: book.description,
    //         image: book.image,
    //         link: book.link,
    //     }).then(() => this.getBooks());
    // };

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />
                    <Col size="md-12">
                        <Card title="Book Search">
                            <Form
                                q={this.state.q}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                    </Col>
                    <Row>
                        <Col size="md-12">
                            <Card title="Results">
                                {/* {this.state.length ? (
                                    <List>
                                        {this.state.books.map(book => (
                                            <Book
                                                key={book.id}
                                                title={book.volumeInfo.title}
                                                subtitle={book.volumeInfo.subtitle}
                                                link={book.volumeInfo.infoLink}
                                                authors={book.volumeInfo.authors}
                                                description={book.volumeInfo.description}
                                                image={book.volumeInfo.image}
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
                                )} */}
                                <div className="container">
                                    <h2>Results</h2>
                                    <Results books={this.state.books} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
};

export default Home;
