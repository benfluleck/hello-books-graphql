import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../../queries/queries';
import BookDetails from '../BookDetails/BookDetails';

import './BookList.css';


/**
 * Display Book List component
 *
 * @class BookList
 *
 * @extends {Component}
 */
class BookList extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: null
    };
  }


  displayBooks = () => {
    const data = this.props.data;
    return data.loading ? <h3>Loading.....</h3> :
      data.allBooks.map(book =>
        (
          <li
            className="book__item"
            key={book.id}>
            <button
              onClick={(event) => {
                this.setState({ selectedBook: book.id });
              }}>
              {book.name}
            </button>
          </li>
        ));
  }

  /**
   *
   *@returns {JSX.Element}
   */
  render() {
    return (
      <div>
        <ul id="book__list">
          {this.displayBooks()}
        </ul>
        <BookDetails bookId={this.state.selectedBook} />
      </div>
    );
  }
}

BookList.defaultProps = {
  data: {}
};

BookList.propTypes = {
  data: PropTypes.object
};

export default graphql(getBooksQuery)(BookList);
