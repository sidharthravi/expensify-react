import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';

import { startSetExpenses } from './actions/expenses';
import { firebase } from './firebase/firebase';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';

import './index.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

let hasRendered = false;
const renderApp = () => {
	if(!hasRendered)
		ReactDOM.render( jsx, document.getElementById('root') );
}

var jsx = (
	<Provider store={store}>
		<AppRouter/>
	</Provider>
);

ReactDOM.render( <p>Loading...</p>, document.getElementById('root') );

firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() => {
			renderApp();
			if(history.location.pathname === '/')
				history.push('/dashboard');
		});
	}
	else {
		store.dispatch(logout());
		renderApp()
		history.push('/');
	}
});