import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h2>404!</h2>
        <p><Link to="/">Go Home</Link></p>
    </div>
);

export default NotFoundPage;