const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id:{type: String},
    title: {type: String, required: true},
    authors: {type:[String], required: true},
    description: {type:String},
    image: {type:String, unique: true, dropDups: true},
    link: {type: String, required: true},
})

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;