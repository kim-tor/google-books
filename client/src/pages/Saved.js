import React, { Component } from 'react'
import { Container } from "../components/Grid/index";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron/index";
import API from '../utils/API';
import Results from '../components/Results'

class Saved extends Component {
    state = {
        savedBooks: [],
    }
    
    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />
                    <h2>Saved books</h2>
                    <Results books={this.state.savedBooks} />
               
                </Container>
                
            </div>
        )
        
    }
}

export default Saved;