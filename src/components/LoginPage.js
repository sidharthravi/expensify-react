import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

import '../styles/login.css';

export const LoginPage = ( { startLogin } ) => (
    <div className="login-layout">
        <div className="login-box">
            <h1 className="login-box-title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="btn" onClick={startLogin} >Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => { dispatch(startLogin()) }
});

export default connect(undefined, mapDispatchToProps)(LoginPage);