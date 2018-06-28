import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolver';

const typeDefs = [`
  type Book {
    id: ID!
    name: String
    genre: String
    description: String
    bookImage: String
    author: Author!
  }

   type Author {
    id: ID!
    name: String!
    age: Int!
    books: [Book!]!
  }

  type Query {
    getBook(id: ID): Book
    allBooks: [Book!]!
    getAuthor(id: ID): Author
    allAuthors: [Author!]!
  }

  type Mutation {
    addAuthor(name: String!, age: Int!): Author
    addBook(name: String!, genre: String!,description : String, bookImage : String, authorId:ID!): Book
  }
 `]


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
