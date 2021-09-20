const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id:{type: String},
    title: {type: String, required: true},
    author: {type:[String], required: true},
    description: {type:String, required: true},
    image: {type:String, unique: true, dropDups: true},
    link: {type: String, required: true},
    googleId: { type: String, required: true, unique: true }
})

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;