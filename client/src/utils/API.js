import axios from "axios";

export default {
  // Gets books from the Google API
  googleBooks: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q= + ${query}`);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // Get the saved a books from the database
  getBooks: function () {
    return axios.get("/api/books");
  }
};


