import React from 'react';
import DeleteBookButton from './DeleteBookButton';

const BookList = ({ books, onDelete }) => {
    return (
        <div>
            <h2>Book List</h2>
            {books.length > 0 ? (
                <ul>
                    {books.map((book) => (
                        <li key={book._id}>
                            {book.title} by {book.author}
                            <DeleteBookButton bookId={book._id} onDelete={onDelete} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No books available.</p>
            )}
        </div>
    );
};

export default BookList;

