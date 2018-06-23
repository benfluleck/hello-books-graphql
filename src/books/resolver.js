import { data } from './data'

const resolvers = {
  Query: {
    allBooks: () => data.books,
    getBook: (root,args) => data.books.find(book => book.id === args.id),
    allAuthors: () => data.authors,
    getAuthor: (root,args) => data.authors.find(author => author.id === args.id),
  },
  Book: {
    author: ({ id }) => data.authors.filter(author => author.id === id)
  },
  Author: {
    books: ({ id }) => data.books.filter(book => book.authorId === id)

  }

}


export default resolvers;
