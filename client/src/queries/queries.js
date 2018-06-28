import gql from "graphql-tag";

const getBooksQuery =
  gql`
 {
    allBooks {
      id,
      name
    }
  }
  `;

const getAuthorsQuery =
  gql`
 {
    allAuthors {
      id,
      name
    }
  }
  `;

const getBookQuery =
  gql`
  query($id:ID){
    getBook(id:$id){
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }

  `;


const addBookMutation =
  gql`
  mutation($name: String!, $genre: String!, $authorId: ID!  ) {
    addBook(name: $name, genre: $genre, authorId: $authorId){
      name
      id
    }
  }
  `;

export { getAuthorsQuery, getBookQuery, getBooksQuery, addBookMutation };
