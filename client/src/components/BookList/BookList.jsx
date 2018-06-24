import React,{Component} from 'react';
import gql from "graphql-tag";
import { graphql } from 'react-apollo'
import shortid from 'shortid';

import './BookList.css'


const getBooksQuery =
 gql`
 {
    allBooks {
      name
    }
  }
  `


class BookList extends Component {
  displayBooks = () => {
    const data = this.props.data
    return data.loading ? <h3>Loading.....</h3>
      : data.allBooks.map(
        book => <li className="book__item" key={shortid.generate()}>{book.name}</li>
    )
  }
  render() {
    return(
      <div>
        <ul id="book__list">
          {this.displayBooks()}
        </ul>
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);
