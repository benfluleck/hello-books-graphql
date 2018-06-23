import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const booksSchema = new Schema({
  name: String,
  genre: String,
  description: String,
  bookImage: String,
  authorId: String,
})

export default mongoose.model('Book', booksSchema )
