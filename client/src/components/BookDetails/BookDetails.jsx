import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import Book from '../Book/Book';
import { getBookQuery } from '../../queries/queries';

/**
 * Display Book List component
 *
 * @class BookList
 *
 * @extends {Component}
 */
class BookDetails extends PureComponent {
  /**
   *
   */
  render() {
    return (
      <div id="book__details">
        <Book getBook={this.props.data.getBook} />
      </div>
    );
  }
}

BookDetails.defaultProps = {
  data: {}
};

BookDetails.propTypes = {
  data: PropTypes.object
};


export default graphql(getBookQuery, {
  options: (props) => ({
    variables: {
      id: props.bookId
    }
  })
})(BookDetails);

