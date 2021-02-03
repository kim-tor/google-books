const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type:String, required: true},
    description: {type:String, required: true},
    image: {type:String, unique: true, dropDups: true},
    link: {type: String, required: true}
})

const googleBooks = mongoose.model("googleBooks", bookSchema);
module.exports = googleBooks;