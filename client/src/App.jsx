import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

import BookList from './components/BookList/BookList';
import AddBook from './components/AddBook/AddBook';

import './App.css';

// Initialise Apollo Client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


const App = () => (
  <ApolloProvider client={client}>
    <React.Fragment>
      <div className="header">
        <h1>Ninja&apos;s Reading List</h1>
      </div>
      <BookList />
      <AddBook />
    </React.Fragment>
  </ApolloProvider>
);


export default App;

