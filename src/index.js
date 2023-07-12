import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';

export const bookList = (state = [], action) => {
  // TODO - set book list with data from server
  if (action.type === 'SET_BOOKLIST') {
    // This will return the BookList that we got back from the server
    // We don't need spread here because 
    // we don't care about the old value 
    return action.payload;
  }
  return state;
}

const reduxStore = createStore(
  combineReducers({
    bookList
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

