import Book from '../models/book';
import Author from '../models/author'


const resolvers = {
  Query: {
    allBooks: () => Book.find({}),
    getBook: (root,args) => Book.findById(args.id),
    allAuthors: () => Author.find({}),
    getAuthor: (root,args) => Author.findById(args.id),
  },
  Book: {
    author: (root) =>  Author.findById(root.authorId)
  },
  Author: {
    books: ({ id }) => Book.find({authorId : id})

  },
  Mutation: {
    addAuthor: (root,{ name, age }) => {
      let author = new Author({
        name,
        age
      })
      return author.save();
    },
    addBook: (root,{name, genre,description, bookImage, authorId}) => {
      let book = new Book({
        name,
        genre,
        description,
        bookImage,
        authorId,
      })
      return book.save();
    }

  },


}


export default resolvers;
