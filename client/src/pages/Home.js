import React, { Component } from "react";
import { Container } from "../components/Grid/index";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron/index";
import { Input, SubmitBtn } from "../components/Search";
import API from "../utils/API";
import ResultList from "../components/ResultList";

class Home extends Component {
    state = {
        books: [],
        search: "",
    };
    // Create function to search for books through Google API
    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                this.setState({
                    books: res.data.items,
                    search: ""
                });
            })
            .catch(err => console.log(err));
    };

    // Create function to handle input data
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // Create function to handle form data submission
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };

    saveBookToDB = (currentBook) => {
        API.saveBook({
          id: currentBook.id,
          title: currentBook.title,
          authors: currentBook.authors,
          description: currentBook.description,
          image: currentBook.image,
          link: currentBook.link,
        })
          .then((res) => console.log('Successful POST to DB!', res))
          .catch((err) => console.log('ERR ==>', err));
      };
    render() {
        return (
            <>
                <div>
                    <Nav />
                    <Container fluid>
                        <Jumbotron />
                        <form>
                            <h4>Search for books</h4>
                            
                            <Input
                                value={this.state.search}
                                onChange={this.handleInputChange}
                                name="search"
                                placeholder="e.g. Harry Potter"
                            />
                            <SubmitBtn onClick={this.handleFormSubmit} />
                        </form>

                        {this.state.books.length ? (
                            <ResultList
                                bookState={this.state.books}
                                saveBookToDB={this.saveBookToDB}>
                            </ResultList>
                        ) : (
                            <div>
                                <hr />
                                <p style={{ fontStyle: "italic" }}>No results to display</p>
                            </div>
                        )}

                    </Container>
                </div>
            </>
        )
    }
};

export default Home;
