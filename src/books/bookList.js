import React from 'react';
import BookItem from './bookItem';
import PropTypes from 'prop-types';
const styles = {
    ul: {
        listStyle: 'none',
        margin:0,
        padding:0
    }
};
function BookList(props){
    return (
        <ul style={styles.ul}>
            {props.books.map((book, index) => {
                return <BookItem book={book} key={book.id} index={index} onChange={props.onToggle}/>
            })}
        </ul>
    );
}

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
};
export default BookList;