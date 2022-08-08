import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className='LoginPage'>
            <h1>This is login page!</h1>
            <Link to='/main'>
                <button>Log In!</button>
            </Link>
        </div>
    );
};

export default LoginPage;