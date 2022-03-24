import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import homeSlice from './redux/homeSlice';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import {  routerMiddleware, connectRouter } from 'connected-react-router';
import learningSlice from './redux/learningSlice';

export const history = createBrowserHistory()

const store = configureStore({
  reducer: {
    home: homeSlice,
    learning: learningSlice,
    router: connectRouter(history)
  },
  preloadedState: {
    home: {
      finishFirstInit: localStorage.getItem('first-visit') || false,
    }
    
  },
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)]
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

