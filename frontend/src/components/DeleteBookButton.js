import React from 'react';

const DeleteBookButton = ({ bookId, onDelete }) => {
    const handleDelete = () => {
        onDelete(bookId);
    };

    return (
        <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
            Delete
        </button>
    );
};

export default DeleteBookButton;

