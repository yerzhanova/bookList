import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from './../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
};
function BookItem ({book, index, onChange}){
    const classes = [];
    const { removeBook } = useContext(Context);
    if (book.isDeleted) {
        classes.push('done');
    }
    console.log(book, "book");
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input style={styles.input} type="checkbox" checked={book.isDeleted} onChange={() => onChange(book.id)}/>
                <strong>{index + 1}</strong>
                &nbsp;
                {book.title}
            </span>
            <button className={'rm'} onClick={ removeBook.bind(null, book.id) }>&times;</button>
        </li>
    )
}

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
};
export default BookItem;