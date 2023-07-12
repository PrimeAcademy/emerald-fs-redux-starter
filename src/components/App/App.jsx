import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

import './App.css';

function App() {
  // const [bookList, setBookList ] = useState([]);
  const dispatch = useDispatch();

  // TODO - GET Book List from server
  const fetchBookList = () => {
    axios.get('/books').then((response) => {
    // Update the redux store with our bookList
    // Dispatch an action with the booklist as a payload
    dispatch({
      type: 'SET_BOOKLIST',
      payload: response.data
    })
  }).catch(err => {
    console.log('error with get bookList: ', err);
  });
}

  useEffect(() => {
    fetchBookList();
  }, []);

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm fetchBookList={fetchBookList} />
        <BookList />
      </main>
    </div>
  );
}

export default App;