import React, { Component } from "react";
import {Container} from "../Grid";

class ResultListItem extends Component {

  state = {
    mounted: false,
    bgColor: "",
    color: "",
    text: "Save"
  };

  componentDidMount = () => {
    this.setState({
      mounted: true
    });
  };

  setSave = () => {
    if (this.state.text === "Save") {
      this.setState({
        bgColor: "#00E000",
        color: "white",
        text: "Saved"
      })
    }
    else {
      this.setState({
        bgColor: "",
        color: "",
        text: "Save"
      })
    }
  }

  onClickSave = () => {
    this.props.saveBookToDB(this.props)
    this.setSave();
  }

  render() {
    
    return (
      <Container>
      <div className="card-group">
        <div className="card mb-2">
          <div className="d-flex flex-row align-items-center justify-content-between card-header">
            <div>
              <h5 className="card-title">{this.props.title}</h5>
              <small>
                {this.props.authors}
              </small>
            </div>
            <img
              src={this.props.image}
              style={{ maxWidth: '100px' }}
              alt="book"
            />
          </div>
          <div className="card-body">
            <small className="card-text">{this.props.description}</small>
          </div>
          <div className="card-footer">
            <a
              href={this.props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              View Book
            </a>
            <button
              onClick={this.onClickSave}
              style={{
                backgroundColor: this.state.bgColor,
                color: this.state.color,
                marginLeft: '0.5rem',
              }}
              className="btn btn-outline-success"
            >
              {this.state.text}
            </button>
          </div>
        </div>
      </div>
      </Container>
    );
  }

}

export default ResultListItem;
