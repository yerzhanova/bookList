import React from 'react';
import BookList from './books/bookList';


function App() {
    let books = [
        {id: 1, title: "1984", author: 'Orwell', price: '8000', img: 'https://www.amazon.co.uk/Nineteen-Eighty-four-Penguin-Essentials-George/dp/0141036141'},
        {id: 2, title: "1984", author: 'Orwell', price: '8000', img: 'https://www.amazon.co.uk/Nineteen-Eighty-four-Penguin-Essentials-George/dp/0141036141'},
        {id: 3, title: "1984", author: 'Orwell', price: '8000', img: 'https://www.amazon.co.uk/Nineteen-Eighty-four-Penguin-Essentials-George/dp/0141036141'},
        {id: 4, title: "1984", author: 'Orwell', price: '8000', img: 'https://www.amazon.co.uk/Nineteen-Eighty-four-Penguin-Essentials-George/dp/0141036141'},
    ];

    function toggleBook(id){
        console.log('app', id);
        books = books.map((book) => {
            if (book.id === id) {
                book.completed = true;
            }
            return book;
        })
    }
  return (
    <div className="wrapper">
      <h1>book shop</h1>
        <BookList books={books} onToggle={toggleBook}/>
    </div>
  );
}

export default App;
