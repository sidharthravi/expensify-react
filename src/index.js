import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();

var jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(
    jsx,
    document.getElementById('root'),
);
