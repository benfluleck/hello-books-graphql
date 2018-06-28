import React from 'react';
// import PropTypes from 'prop-types';


const Book = ({ getBook }) =>
  (getBook ?
    <div>
      <h2>{getBook.name}</h2>
      <p>{getBook.genre}</p>
      <p>{getBook.author.name}</p>
      <p>All Books By this Author</p>
      <ul className="other-books">
        {
          getBook.author
            .books.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div> :
    <div>No Book Selected</div>);


export default Book;
