import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import homeSlice from './redux/homeSlice';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import {  routerMiddleware, connectRouter } from 'connected-react-router';
import learningSlice from './redux/learningSlice';
import statisticsSlice from './redux/statisticsSlice';

export const history = createBrowserHistory()

const store = configureStore({
  reducer: {
    home: homeSlice,
    learning: learningSlice,
    statistics: statisticsSlice,
    router: connectRouter(history)
  },
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)]
})

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

