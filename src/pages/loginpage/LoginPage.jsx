import React from 'react';
import { Link } from 'react-router-dom';
import './styles.LoginPage'

const LoginPage = () => {
    return (
        <div className='LoginPage'>
            <h1>This is login page!</h1>
            <div>
                <input type="email" id="email" />
            </div>
            <div>
                <input type="password" id="password" />
            </div>
            <div>
                <Link to='/main'>
                    <button>Log In!</button>
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;