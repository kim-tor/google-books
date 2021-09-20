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
                                <h2>Results</h2>
                                <Results books={this.state.books} />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
};

export default Home;
