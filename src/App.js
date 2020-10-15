import React from 'react';
import BookList from './books/bookList';
import Context from './context';
import AddTodo from './books/addBook';

function App() {
    const [books, setBooks] = React.useState([
        {id: 1, title: "1984", author: 'Orwell', isDeleted: false, price: '8000', img: 'https://www.amazon.co.uk/Nineteen-Eighty-four-Penguin-Essentials-George/dp/0141036141'},
        {id: 2, title: "1984", author: 'Orwell', isDeleted: true, price: '8000', img: 'https://www.amazon.co.uk/Nineteen-Eighty-four-Penguin-Essentials-George/dp/0141036141'},
        {id: 3, title: "1984", author: 'Orwell', isDeleted: false, price: '8000', img: 'https://www.amazon.co.uk/Nineteen-Eighty-four-Penguin-Essentials-George/dp/0141036141'},
        {id: 4, title: "1984", author: 'Orwell', isDeleted: false, price: '8000', img: 'https://www.amazon.co.uk/Nineteen-Eighty-four-Penguin-Essentials-George/dp/0141036141'},
    ]);

    function toggleBook(id){
        console.log('app', id);
        setBooks(
            books.map((book) => {
                if (book.id === id) {
                    book.completed = true;
                }
                return book;
            })
        );
    }

    function removeBook(id) {
        setBooks(books.filter(book => book.id !== id))
    }

  return (
      <Context.Provider value={{removeBook}}>
          <div className="wrapper">
              <h1>book shop</h1>
              <AddTodo/>
              {books.length > 0 ? <BookList books={books} onToggle={toggleBook}/> : <p>No books</p>}
          </div>
      </Context.Provider>
  );
}

export default App;
