import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import {
  getAuthorsQuery,
  getBooksQuery,
  addBookMutation,
} from '../../queries/queries';


/**
 * Add Books using Mutation from GraphQl
 *
 * @class AddBook
 *
 * @extends {Component}
 */
class AddBook extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      bookName: "",
      genre: "",
      authorId: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearFields = () => {
    this.setState({
      bookName: "",
      genre: "",
    });
  }


  displayAuthors = () => {
    const data = this.props.getAuthorsQuery;
    return data.loading ?
      <option disabled>Loading Authors.....</option> :
      data.allAuthors.map(author =>
        <option key={author.id} value={author.id}>{author.name}</option>);
  }


  /**
   * @description Handle onChange events on form inputs
   *
   *
   * @memberof AddBook
   *
   * @param {*} event
   *
   * @returns {function} a function that handles change event on inputs
   */
  onChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  /**
   *
   * @param {*} event
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.bookName,
        genre: this.state.genre,
        authorId: this.state.authorId,
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
    this.clearFields();
  }

  /**
   *
   *@returns {JSX.Element}
   */
  render() {
    return (
      <form id="add-book" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="bookName">
            Book Name:
            <input
              type="text"
              name="bookName"
              value={this.state.bookName}
              onChange={this.onChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="genre">
            Genre:
            <input
              type="text"
              name="genre"
              value={this.state.genre}
              onChange={this.onChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="author">
            Author:
            <select name="authorId" onChange={this.onChange}>
              <option>Select Author</option>
              {this.displayAuthors()}
            </select>
          </label>
        </div>
        <button>+</button>
      </form>
    );
  }
}

AddBook.defaultProps = {
  addBookMutation: {}
};

AddBook.propTypes = {
  getAuthorsQuery: PropTypes.object.isRequired,
  addBookMutation: PropTypes.func
};

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
